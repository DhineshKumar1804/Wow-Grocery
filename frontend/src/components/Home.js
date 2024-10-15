import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import image from './img1.png';
import image2 from './img2.png';
import image3 from './img3.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShopNowClick = () => {
    navigate('/login'); // Navigate to ProductList page
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to WOW E-Grocery!</h1>
        <p>Your one-stop online destination for premium, fresh groceries delivered directly to your doorstep.</p>
        <p>Explore our wide selection of farm-fresh vegetables, dairy products, and all the essentials you need to keep your pantry stocked.</p>
        <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
      </header>

      <section className="home-featured">
        <div className="featured-content">
          <img src={image3} alt="Fresh Dairy Products" className="featured-img" />
          <div className="featured-text">
            <h2>All the Groceries You Need in One Place</h2>
            <p>From everyday staples to hard-to-find ingredients, we offer a carefully curated selection of groceries, all sourced from trusted suppliers. Enjoy easy online shopping and have everything you need delivered in no time!</p>
          </div>
        </div>
      </section>
      
      <section className="home-banner">
        <div className="banner-content">
          <img src={image} alt="Fresh Vegetables" className="banner-img" />
          <div className="banner-text">
            <h2>Farm-Fresh Vegetables Delivered to Your Door</h2>
            <p>Our vegetables are picked at peak freshness to ensure top quality and taste. Whether you're cooking up a family meal or preparing a quick snack, you'll find our produce perfect for every dish.</p>
          </div>
        </div>
      </section>

      <section className="home-featured">
        <div className="featured-content">
          <img src={image2} alt="Fresh Dairy Products" className="featured-img" />
          <div className="featured-text">
            <h2>Pure and Fresh Dairy Products</h2>
            <p>Indulge in the richness of our dairy products, including milk, butter, cheese, and more, all sourced from local farms. Each product is carefully selected to ensure freshness, purity, and taste in every bite.</p>
          </div>
        </div>
      </section>
      <h3 className='offer'>Get free delivery on your first order.</h3>
      <button className="offer1" onClick={handleShopNowClick}>Shop Now</button>
    </div>
  );
};

export default Home;
