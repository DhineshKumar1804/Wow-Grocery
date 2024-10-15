import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        // Fetch products and categories
        const fetchData = async () => {
            try {
                const productsResponse = await axios.get('http://localhost:5001/api/products');
                setProducts(productsResponse.data);

                // Assuming categories can be fetched from an API or are static
                const categoriesResponse = await axios.get('http://localhost:5001/api/categories');
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error('There was an error fetching data!', error);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (productName) => {
        alert(`${productName} added to cart!`);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className='product-list'>
            <div className='category-filter'>
                <label htmlFor='category-select'>Filter by category:</label>
                <select id='category-select' value={selectedCategory} onChange={handleCategoryChange}>
                <option value='All'>All</option>
                    <option value='grocery'>grocery</option>
                    <option value='dairy'>dairy</option>
                    <option value='vegetables'>vegetables</option>
                    
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <ul>
                {filteredProducts.map(product => (
                    <li key={product._id}>
                        <img src={product.imageUrl} alt={product.name} className='product-image' />
                        <div className='product-details'>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <h4>₹{product.price}</h4>
                            <button 
                                className='add-to-cart' 
                                onClick={() => handleAddToCart(product.name)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
