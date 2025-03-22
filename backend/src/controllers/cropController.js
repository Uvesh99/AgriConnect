import Crop from '../models/Crop.js';
import User from '../models/User.js';

// Create a new crop
export const createCrop = async (req, res) => {
  const { cropName, startingDate, harvestingDate, harvestingMethod, cropPhase, acres, expectedQuantity, notes } = req.body;

  try {
    const farmerId = req.user.id; // Assuming 'req.user.id' is set by the authentication middleware

    // Create a new crop
    const newCrop = new Crop({
      farmerId,
      cropName,
      startingDate,
      harvestingDate,
      harvestingMethod,
      cropPhase: cropPhase || 'Initial', // Default to 'Initial' if no crop phase provided
      acres,
      expectedQuantity,
      notes
    });

    // Save the crop to the database
    await newCrop.save();

    res.status(201).json({
      message: 'Crop created successfully!',
      crop: newCrop
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all crops for a particular farmer
export const getCrops = async (req, res) => {
  try {
    const farmerId = req.user.id; // Assuming 'req.user.id' is set by the authentication middleware

    // Find all crops for the farmer
    const crops = await Crop.find({ farmerId }).populate('farmerId', 'name email');

    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single crop by ID for a particular farmer
export const getCropById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the crop by ID (no need to check farmerId because we want to allow anyone to see it)
      const crop = await Crop.findById(id).populate('farmerId', 'name email');
  
      if (!crop) {
        return res.status(404).json({ message: 'Crop not found.' });
      }
  
      res.status(200).json(crop);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Update crop phase (requires authentication)
export const updateCropPhase = async (req, res) => {
  const { id } = req.params;
  const { cropPhase } = req.body;

  try {
    const farmerId = req.user.id; // Assuming 'req.user.id' is set by the authentication middleware

    // Ensure the crop belongs to the farmer
    const crop = await Crop.findOne({ _id: id, farmerId });

    if (!crop) {
      return res.status(404).json({ message: 'Crop not found.' });
    }

    // Update the crop phase
    crop.cropPhase = cropPhase || crop.cropPhase; // If no phase is provided, keep the existing one
    await crop.save();

    res.status(200).json({
      message: 'Crop phase updated successfully!',
      crop
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
