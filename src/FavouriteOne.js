
import React, { useEffect, useState } from 'react';

function FavouriteOne({ category, subData, handleCategorySelect }) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (subData) {
            const newFilteredData = subData.filter(item => item.product_option_id === category);
            setFilteredData(newFilteredData);
        } else {
            setFilteredData([]);
        }
    }, [category, subData]);

    return (
        <div className="FavouriteOne">
    
            {filteredData.map((item, index) => (
                <div key={index} className="f1">
                    <button className="feature-button-sub" data-id={item.id} 
                        onClick={() => handleCategorySelect(item.id)} >
                        <div className="category_name_sub">{item.sub_product_name}</div>
                        <div className="price">₹{item.starting_price}</div>
                        <div className="actualprice">₹{item.price}</div>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default FavouriteOne;
