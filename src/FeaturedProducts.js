// import React from 'react';

// function FeaturedProducts({ category, tempData, handleCategorySelect }) {
//     const filteredData = tempData ? tempData.filter(item => item.base_category_name === category) : [];

//     return (
//         <div className="FeaturePrducts">
//             <h4>Featured Products</h4>
//             {filteredData.map((item, index) => (
//                 <div key={index} className="d1">
//                     <button 
//                         className="feature-button" 
//                         data-id={item.id} 
//                         onClick={() => handleCategorySelect(item.id)} // Using the function passed as a prop
//                     >
//                         <div className="category_name">{item.category_name}</div>
//                         <div className="price">Starting From ₹{item.starting_price}</div>
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default FeaturedProducts;


import React, { useEffect, useState } from 'react';

function FeaturedProducts({ category, tempData, handleCategorySelect }) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (tempData) {
            const newFilteredData = tempData.filter(item => item.base_category_name === category);
            setFilteredData(newFilteredData);
        }
    }, [category, tempData]); // Recalculate filteredData when category or tempData changes

    return (
        <div className="FeaturePrducts">
          
            {filteredData.map((item, index) => (
                <div key={index} className="d1">
                    <button 
                        className="feature-button" 
                        data-id={item.id} 
                        onClick={() => handleCategorySelect(item.id)} // Using the function passed as a prop
                    > 
                        <div className="category_name">{item.category_name}</div>
                        <div className="price">Starting From ₹{item.starting_price}</div>
                    </button>
                </div>
            ))}
            
        </div>
    );
}

export default FeaturedProducts;
