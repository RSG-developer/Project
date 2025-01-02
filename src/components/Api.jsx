import React, { useEffect, useState } from 'react';

export default function Api() {
    // State for storing API data and loading/error statuses
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading
                const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2025-01-01&to=2025-01-01&sortBy=popularity&apiKey=da832593483345998255a2c7e19ae9cd'); // Replace with your API URL

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result.articles); // Use result.articles to get the list of articles
            } catch (err) {
                setError(err.message); // Handle errors
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures it runs only once

    // Render
    if (loading) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-4 text-red-600">Error: {error}</div>;
    }

    return (
        <div className='container my-4 ' id="home"> 
    <div className='row'>
                {data.map((item) => (
                    <div key={item.url} className="col-md-3 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={item.urlToImage || 'https://via.placeholder.com/150'}
                                className="card-img-top"
                                alt={item.title || "News Image"}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title || "Title not available"}</h5>
                                <p className="card-text" style={{ fontFamily: "Times New Roman,serif" }}>
                                    {item.description.slice(0,9) +"..." || "Description not available"}
                                </p>
                                <a href={item.url || "#"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
