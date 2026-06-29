import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    subtitle: String,
    description: String,
    price: { type: Number, required: true },
    images: [String],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    ingredients: [String],
    size: String,
    isFeatured: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model('Product', productSchema);
