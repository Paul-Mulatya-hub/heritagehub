import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const StorePage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        priceMin: '',
        priceMax: '',
        rating: '',
        material: '',
        color: '',
        seller: '',
        inStock: false,
        newArrivals: false,
        saleItems: false,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products', { params: filters });
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters({
            ...filters,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="store-page">
            <div className="filters">
                <h2>Filter Products</h2>
                <div className="filter-group">
                    <label>Category</label>
                    <select name="category" value={filters.category} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Crochets">Crochets</option>
                        <option value="Wood Carvings">Wood Carvings</option>
                        <option value="Cultural Artifacts">Cultural Artifacts</option>
                        <option value="Drawings">Drawings</option>
                        <option value="Handmade Items">Handmade Items</option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Pottery">Pottery</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Home Decor">Home Decor</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Price Range</label>
                    <input type="number" name="priceMin" placeholder="Min" value={filters.priceMin} onChange={handleFilterChange} />
                    <input type="number" name="priceMax" placeholder="Max" value={filters.priceMax} onChange={handleFilterChange} />
                </div>
                <div className="filter-group">
                    <label>Rating</label>
                    <select name="rating" value={filters.rating} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="1">1 star and up</option>
                        <option value="2">2 stars and up</option>
                        <option value="3">3 stars and up</option>
                        <option value="4">4 stars and up</option>
                        <option value="5">5 stars</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Material</label>
                    <select name="material" value={filters.material} onChange={handleFilterChange}>
                        <option value="">All</option>
                        <option value="Wood">Wood</option>
                        <option value="Metal">Metal</option>
                        <option value="Fabric">Fabric</option>
                        <option value="Clay">Clay</option>
                        <option value="Glass">Glass</option>
                        <option value="Stone">Stone</option>
                        <option value="Mixed Media">Mixed Media</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Color</label>
                    <input type="text" name="color" placeholder="Color" value={filters.color} onChange={handleFilterChange} />
                </div>
                <div className="filter-group">
                    <label>Seller</label>
                    <input type="text" name="seller" placeholder="Seller" value={filters.seller} onChange={handleFilterChange} />
                </div>
                <div className="filter-group">
                    <label>
                        <input type="checkbox" name="inStock" checked={filters.inStock} onChange={handleFilterChange} />
                        In Stock
                    </label>
                </div>
                <div className="filter-group">
                    <label>
                        <input type="checkbox" name="newArrivals" checked={filters.newArrivals} onChange={handleFilterChange} />
                        New Arrivals
                    </label>
                </div>
                <div className="filter-group">
                    <label>
                        <input type="checkbox" name="saleItems" checked={filters.saleItems} onChange={handleFilterChange} />
                        Sale Items
                    </label>
                </div>
            </div>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default StorePage;
