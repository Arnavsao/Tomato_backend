import mongoose from "mongoose";

// Define food schema
const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
});

// Create the food model
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;