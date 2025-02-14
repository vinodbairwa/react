// import React from 'react';

// function FavouriteOne({ category, subData, handleCategorySelect }) {
   
   
//     const filteredData = subData ? subData.filter(item => item.product_option_id === category) : [];
   
    
   
//     return (
//         <div className="FavouriteOne">
//             <h4>Choose Your Favourite One</h4>
//             {filteredData.map((item, index) => (
                
//                 <div key={index} className="f1">
                    
//                     <button className="feature-sub-button"data-id={item.id} 
//                         onClick={() => handleCategorySelect(item.id)} >
//                         <div className="category_name">{item.sub_product_name}</div>
//                         <div className="price">₹{item.starting_price}</div>
//                         <div className="actualprice">₹{item.price}</div>
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default FavouriteOne;


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
