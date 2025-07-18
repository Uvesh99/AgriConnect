import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Paper,
  Box,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { CreditCard } from "lucide-react";

export default function PaymentSection({
  open,
  onClose,
  product,
  quantity,
  setQuantity,
  unit,
  setUnit,
  isProcessing,
  setIsProcessing,
  handleStripeCheckout, // Stripe handler function passed from parent
}) {
  const totalPrice = parseInt(product?.price || 0) * quantity;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5">Payment Details</Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 1 }}>
          {product && (
            <Paper sx={{ p: 3, mb: 4, borderRadius: "12px", bgcolor: "#f8f9fa" }}>
              <Typography variant="subtitle1" sx={{ mb: 2, color: "#666" }}>
                Order Summary
              </Typography>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">{product.name}</Typography>
                <Typography variant="body1">
                  ₹{product.price}/{product.unit || "unit"}
                </Typography>
              </div>
              <Divider sx={{ my: 2 }} />
              <div className="flex justify-between items-center">
                <Typography variant="h6">Total Amount</Typography>
                <Typography variant="h5" sx={{ color: "#E67E22", fontWeight: "600" }}>
                  ₹{totalPrice}
                </Typography>
              </div>
            </Paper>
          )}

          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
            <InputLabel id="unit-select-label">Select Unit</InputLabel>
            <Select
              labelId="unit-select-label"
              id="unit-select"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              label="Select Unit"
            >
              <MenuItem value="kg">Kilograms</MenuItem>
              <MenuItem value="tons">Tons</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label={`Quantity (${unit})`}
            type="number"
            fullWidth
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            InputProps={{
              inputProps: { min: 1 },
              sx: { borderRadius: "8px" },
            }}
          />

          {/* ❌ Remove manual card input fields — Stripe Checkout handles this */}
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined" sx={{ borderColor: "#E67E22", color: "#E67E22", mr: 1 }}>
          Cancel
        </Button>
        <Button
          onClick={handleStripeCheckout}
          variant="contained"
          startIcon={isProcessing ? <CircularProgress size={20} color="inherit" /> : <CreditCard />}
          disabled={isProcessing}
          sx={{ bgcolor: "#3498DB", "&:hover": { bgcolor: "#2980B9" } }}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
