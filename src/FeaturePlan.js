

import React from 'react';

function FeaturePlan({ category,FeatureData, handleCategorySelect }) {
    
    console.log("feature zzzzzzzzzzzzzdata",FeatureData)

    const filteredData = FeatureData ? FeatureData.filter(item => item.product_sub_option_id === category) : [];
    
    

    
    
    console.log("filteredData",filteredData)
    return (
        <div className="FeaturePlanclass">
            <h4>all Features</h4>
            {filteredData.map((item, index) => (
                <div key={index} className="c1">
                    <button className="mainfeatures"data-id={item.id} 
                        onClick={() => handleCategorySelect(item.id)} >
                        <div className="title">{item.title}</div>
                        
                    </button>
                </div>
            ))}
        </div>
    );
}

export default FeaturePlan;
