const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
    try {
        const { category, priceMin, priceMax, rating, material, color, seller, inStock, newArrivals, saleItems } = req.query;

        let filter = {};

        if (category) filter.category = category;
        if (priceMin || priceMax) filter.price = {};
        if (priceMin) filter.price.$gte = priceMin;
        if (priceMax) filter.price.$lte = priceMax;
        if (rating) filter.rating = { $gte: rating };
        if (material) filter.material = material;
        if (color) filter.color = color;
        if (seller) filter.seller = seller;
        if (inStock) filter.stock = { $gt: 0 };
        if (newArrivals) filter.createdAt = { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) };
        if (saleItems) filter.onSale = true;

        const products = await Product.find(filter);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProduct = async (req, res) => {
    const { name, description, price, category, stock, seller, images } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            seller,
            images,
        });

        await product.save();
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
