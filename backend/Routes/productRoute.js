const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add a new product
router.post('/add', async (req, res) => {
    try {
        const { name, price, description, imageUrl, category } = req.body; // Include category
        const newProduct = new Product({ name, price, description, imageUrl, category });
        await newProduct.save();
        res.status(201).json({ message: 'Product added Successfully' });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Failed to add product' });
    }
});

// Get products with optional category filter
router.get('/', async (req, res) => {
    const { category } = req.query; // Extract category from query parameters

    try {
        let query = {};
        if (category && category !== 'All') {
            query.category = category;
        }

        const products = await Product.find(query); // Find products based on the query
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Get distinct categories
router.get('/category', async (req, res) => {
    try {
        const categories = await Product.distinct('category'); // Get distinct categories
        res.json(category);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});

module.exports = router;
