

// import React from 'react';

// function FeaturePlan({ category,FeatureData, handleCategorySelect }) {
    
//     console.log("feature zzzzzzzzzzzzzdata",FeatureData)

//     const filteredData = FeatureData ? FeatureData.filter(item => item.product_sub_option_id === category) : [];
    
    

    
    
//     console.log("filteredData",filteredData)
//     return (
//         <div className="FeaturePlanclass">
//             <h4>all Features</h4>
//             {filteredData.map((item, index) => (
//                 <div key={index} className="c1">
//                     <button className="mainfeatures"data-id={item.id} 
//                         onClick={() => handleCategorySelect(item.id)} >
//                         <div className="title">{item.title}</div>
                        
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default FeaturePlan;


// import React, { useEffect, useState } from 'react';

// function FeaturePlan({ category, FeatureData, handleCategorySelect }) {
//     console.log("filtereddddddd",FeatureData);
//     const [filteredData, setFilteredData] = useState([]);

//     useEffect(() => {
//         if (FeatureData) {
//             const newFilteredData = FeatureData.filter(item => item.product_sub_option_id === category);
//             setFilteredData(newFilteredData);
//         }
//     }, [category, FeatureData]);

//     console.log("filteredDatazxxzxzxzxzxas", filteredData);
    
//     return (
//         <div className="FeaturePlanclass">
//             <h4>All Features</h4>
//             {filteredData.map((item, index) => (
//                 <div key={index} className="c1">
//                     <button className="mainfeatures" data-id={item.id} 
//                         onClick={() => handleCategorySelect(item.id)}>
//                         <div className="title">{item.title}</div>
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default FeaturePlan;



import React, { useEffect, useState } from 'react';

function FeaturePlan({ category, FeatureData, handleCategorySelect }) {
    // console.log("filtereddddddd", FeatureData);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (Array.isArray(FeatureData) && FeatureData.length > 0) {
            const newFilteredData = FeatureData.filter(item => item.product_sub_option_id === category);
            setFilteredData(newFilteredData);
        } else {
            setFilteredData([]); // Reset filteredData if FeatureData is not valid
        }
    }, [category, FeatureData]);

    // console.log("filteredDatazxxzxzxzxzxas", filteredData);
    
    return (
        <div className="FeaturePlanclass">
            {/* <h4>All Features</h4> */}
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <div key={index} className="c1">
                        <button className="mainfeatures" data-id={item.id} 
                            onClick={() => handleCategorySelect(item.id)}>
                            <div className="title"><img 
                                src="/image/download.svg" 
                                alt="icon" 
                                className="feature-icon"
                            />{item.title}</div>
                        </button>
                    </div>
                ))
            ) : (
                <p>No features available for this category.</p>
            )}
        </div>
    );
}

export default FeaturePlan;

