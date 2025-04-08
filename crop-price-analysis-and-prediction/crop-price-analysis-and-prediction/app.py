from flask import Flask, render_template, request
import pandas as pd
import plotly.express as px
import joblib
import os
from datetime import datetime
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import numpy as np

app = Flask(__name__)

# Load dataset
DATA_PATH = 'crop_price_dataset.csv'
df = pd.read_csv(DATA_PATH)

# Preprocessing: Convert 'month' to datetime format and extract useful features
df['month'] = pd.to_datetime(df['month'], infer_datetime_format=True)
df['year'] = df['month'].dt.year
df['month_num'] = df['month'].dt.month

# Unique crops for dropdown selection
crop_list = df['commodity_name'].unique().tolist()

# Model Training (Random Forest)
def train_model(df):
    X = df[['year', 'month_num']]
    y = df['avg_modal_price']
    
    # Train-Test Split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Random Forest Regressor
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Save trained model
    joblib.dump(model, 'crop_price_predictor.pkl')
    
    # Evaluate the model
    y_pred = model.predict(X_test)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    return rmse

# Train and save the model
if not os.path.exists('crop_price_predictor.pkl'):
    model_rmse = train_model(df)

# Load trained model
model = joblib.load('crop_price_predictor.pkl')

# Home route with crop data, search bar, dropdown, and insights
@app.route('/')
def home():
    crop_trends = []
    insights = {}
    for crop in crop_list:
        crop_data = df[df['commodity_name'] == crop]

        # Generate a line plot for crop trends
        trend_chart = px.line(crop_data, x='month', y='avg_modal_price', 
                              title=f'{crop} Price Trends Over Time', 
                              labels={'month': 'Month', 'avg_modal_price': 'Avg Price (₹)'}, 
                              template='plotly_dark')
        
        # Collect average monthly price over the years for each crop
        avg_monthly_prices = crop_data.groupby(crop_data['month'].dt.month)['avg_modal_price'].mean().reset_index()
        
        insights[crop] = {
            'best_month': avg_monthly_prices.loc[avg_monthly_prices['avg_modal_price'].idxmax(), 'month'],
            'best_price': avg_monthly_prices['avg_modal_price'].max(),
            'worst_month': avg_monthly_prices.loc[avg_monthly_prices['avg_modal_price'].idxmin(), 'month'],
            'worst_price': avg_monthly_prices['avg_modal_price'].min()
        }

        crop_trends.append(trend_chart.to_html(full_html=False))
    
    # Zip the crop_trends and crop_list together and pass it to the template
    trends_and_crops = zip(crop_trends, crop_list)
    
    return render_template('index.html', trends_and_crops=trends_and_crops, insights=insights, crop_list=crop_list)

# Prediction Route (Handle the form correctly)
@app.route('/predict', methods=['POST'])
def predict():
    crop_name = request.form.get('crop_name')
    future_date = request.form.get('future_date')
    unit = request.form.get('unit')

    # Convert future date to year and month_num
    future_date = datetime.strptime(future_date, '%Y-%m')
    future_year = future_date.year
    future_month_num = future_date.month
    
    # Predict the price using the trained model
    input_data = [[future_year, future_month_num]]
    predicted_price = model.predict(input_data)[0]
    
    # Adjust price based on selected unit
    if unit == 'per_kg':
        adjusted_price = round(predicted_price / 1000, 2)
        unit_display = "₹ per kg"
    else:
        adjusted_price = round(predicted_price, 2)
        unit_display = "₹ per ton"
    
    return render_template('index.html', crop_list=crop_list, predicted_price=adjusted_price, unit=unit_display)

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Change 5001 to any available port
