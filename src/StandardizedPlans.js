// import React from 'react';

// function StandardizedPlans({ category, optionsData, handleCategorySelect }) {
   
//     const filteredData = optionsData ? optionsData.filter(item => item.category_id === category) : [];

//     return (
//         <div className="StandardizedPlans">
//             <h4>Personalized & Standardized Plans</h4>
//             {filteredData.map((item, index) => (
//                 <div key={index} className="s1">
//                     <button 
//                         className="feature-sub-button" 
//                         data-id={item.id} 
//                         onClick={() => handleCategorySelect(item.id)} // Using the function passed as a prop
//                     >
//                         <div className="category_name">{item.product_name}</div>
//                         <div className="price">Starts with ₹{item.starting_price}</div>
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default StandardizedPlans;



import React, { useEffect, useState } from 'react';

function StandardizedPlans({ category, optionsData, handleCategorySelect }) {
    const [filteredData, setFilteredData] = useState([]);
    // console.log("StandardizedPlans","categoryId",category," optionsData", optionsData,"handleCategorySelect ",handleCategorySelect )

    useEffect(() => {
        if (optionsData) {
            const newFilteredData = optionsData.filter(item => item.category_id === category);
            setFilteredData(newFilteredData);
        }
    }, [category, optionsData]);

    return (
        <div className="StandardizedPlans">
    
            {filteredData.map((item, index) => (
                <div key={index} className="s1">
                    <button 
                        className="feature-sub-button" 
                        data-id={item.id} 
                        onClick={() => handleCategorySelect(item.id)} // Using the function passed as a prop
                    >
                        <div className="category_name">{item.product_name}</div>
                        <div className="price">Starts with ₹{item.starting_price}</div>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default StandardizedPlans;
