import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const [subscribed, setSubscribed] = useState(false);
    const API_KEY = "5c5288f5f81c46b492b8a1b469c4a530";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search} AND india&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0, 10);
        setNewsData(dt);
    };

    useEffect(() => {
        getData();
    }, [search]);

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    const userInput = (event) => {
        setSearch(event.target.value);
        getData();
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3000); // Reset message after 3 seconds
    };

    return (
        <div className="news-app">
            <nav>
                <div>
                   <h1>CRJK News</h1> 
                </div>
                
                <ul style={{ display: "flex", gap: "11px" }}>
                    <li><a style={{ fontWeight: 600, fontSize: "17px" }}>All Trending News</a></li>
                    <li><a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a></li>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <div className='scrolling-text'><p className='head'>Stay Updated with CRJK news</p></div>
            </div>
            <div className='categoryBtn'>
                <button onClick={() => { setSearch("top news"); getData(); }}>Top News</button>
                <button onClick={() => { setSearch("business"); getData(); }}>Business</button>
                <button onClick={() => { setSearch("sports"); getData(); }}>Sports</button>
                <button onClick={() => { setSearch("politics"); getData(); }}>Politics</button>
                <button onClick={() => { setSearch("entertainment"); getData(); }}>Entertainment</button>
                <button onClick={() => { setSearch("health"); getData(); }}>Health</button>
                <button onClick={() => { setSearch("fitness"); getData(); }}>Fitness</button>
            </div>

            <div>
                {newsData ? <Card data={newsData} /> : null}
            </div>

            {/* Professional Footer */}
            <footer className="professional-footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>About CRJK News</h3>
                        <p>CRJK News brings you the latest trending news from around the world. Stay informed and updated with us.</p>
                    </div>
                    <div className="footer-section links">
                        <h3>News Categories</h3>
                        <ul>
                            <li><a href="#" onClick={() => { setSearch("top news"); getData(); }}>Top News</a></li>
                            <li><a href="#" onClick={() => { setSearch("business"); getData(); }}>Business</a></li>
                            <li><a href="#" onClick={() => { setSearch("sports"); getData(); }}>Sports</a></li>
                            <li><a href="#" onClick={() => { setSearch("politics"); getData(); }}>Politics</a></li>
                            <li><a href="#" onClick={() => { setSearch("entertainment"); getData(); }}>Entertainment</a></li>
                            <li><a href="#" onClick={() => { setSearch("health"); getData(); }}>Health</a></li>
                            <li><a href="#" onClick={() => { setSearch("fitness"); getData(); }}>Fitness</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <p>Email: contact@crjknews.com</p>
                        
                    </div>
                    <div className="footer-section follow">
                        <h3>Follow Us</h3>
                        <ul className="social-media">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="footer-section subscribe">
                        <h3>Subscribe</h3>
                        <p>Get the latest news delivered to your inbox.</p>
                        <form className="subscribe-form" onSubmit={handleSubscribe}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                        {subscribed && <p className="subscription-message">Thank you for subscribing!</p>}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 CRJK News. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Newsapp;
