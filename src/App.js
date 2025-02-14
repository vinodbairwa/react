import React, { useState } from 'react';
import './App.css';
import FeaturedProducts from './FeaturedProducts';
import StandardizedPlans from './StandardizedPlans';
import FavouriteOne from './FavouriteOne';
import FeaturePlan  from './FeaturePlan';

function App() {
    const [tempData, setTempData] = useState(null);
    const [optionsData, setOptionsData] = useState(null);
    const [subData, setSubData] = useState(null);
    const [FeatureData, setFeatureData] = useState(null); // or use []
    const [category, setCategory] = useState('');
    const [showButtons, setShowButtons] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    

    // Function to fetch all data
    const fetchData = async () => {
        try {
            const categoryResponse = await fetch("http://localhost:8000/product_categories/get/");
            const categoryData = await categoryResponse.json();
            setTempData(categoryData.data);

            const optionsResponse = await fetch("http://localhost:8000/product_options/get/");
            const optionsData = await optionsResponse.json();
            setOptionsData(optionsData.data);

            const subDataResponse = await fetch("http://localhost:8000/product_sub_options/get/");
            const subData = await subDataResponse.json();
            setSubData(subData.data);

            const FeatureDataResponse = await fetch("http://localhost:8000/features_product/get/");
            const FeatureData = await FeatureDataResponse.json();
            setFeatureData(FeatureData.data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Function to handle click on the Pricing button
    const handlePricingClick = () => {
        fetchData();
        setShowButtons(true);  // Ensure buttons are shown
        setCategory("Matrix ONE");
    };

    // Function to update category when a button is clicked
    const handleCategorySelect = (categoryId) => {
        console.log("Selected Category ID:", categoryId);
        setSelectedCategoryId(categoryId); // Update state with selected category ID
    };

    
    return (
        <div className="App">
            <div className="navbar">
            <nav>
            <div className="btn">
                <button id="pricing" >Product</button>
                <button id="pricing" >Indicators</button>
                <button id="pricing" onClick={handlePricingClick}>Pricing</button>
                <button id="pricing" >Contact Us</button>
                <button id="pricing" >Blogs & Insights</button>
                <button id="pricing">About Us</button>
                </div>   
            </nav>
            </div>
            
          
           

        {showButtons && (

            <div className="buttonContainer">
            {/* Heading */}
            <h2 className="heading">Choose the Plan That Fits Your Trading Goals</h2>
  
            {/* Subheading */}
            <div className="subheading">
              <h5>Reach us 24*7</h5>
              <h5>Mix plans</h5>
              <h5>15-days free trial</h5>
            </div>
  
            {/* Buttons */}
            <div className="buttonChild">
            <button id="One" onClick={() => setCategory("Matrix ONE")} >Matrix ONE</button>
            <button id="EDGE" onClick={() => setCategory("Matrix EDGE")}>Matrix EDGE</button>
            <button id="ALGO" onClick={() => setCategory("Matrix ALGO")}>Matrix ALGO</button>
            </div>
          </div>
        )}

        <div className="main">
            {category && (
        
                <div className="maincategory">
                        {/* Passing handleCategorySelect as a prop */}
                       
                    <div className="feature_product">
                    <h4>Featured Products</h4>
                        <FeaturedProducts 
                            category={category} 
                            tempData={tempData} 
                            handleCategorySelect={handleCategorySelect} 
                        />
                    </div>

                    <div className="StandardizedPlansMain">
                    <h4>Personalized & Standardized Plans</h4>
                        <StandardizedPlans 
                            category={selectedCategoryId}   
                            optionsData={optionsData} 
                            handleCategorySelect={handleCategorySelect} 
                        />

                    {/* <div className="FavouriteOneMain"> */}
                    <h4 id="fav">Choose Your Favourite One</h4>
                        <FavouriteOne 
                            category={selectedCategoryId} 
                            subData={subData} 
                            handleCategorySelect={handleCategorySelect} // Passing the handleCategorySelect function
                        />
                    {/* </div> */}
                    <div className="FeaturePlan">
                        <FeaturePlan
                            category={selectedCategoryId}
                            FeatureData={FeatureData} 
                            handleCategorySelect={handleCategorySelect} />
                        
                    </div>
                    </div>
                    
            
                </div>
                )}
            </div>
        </div>
    );
}


export default App;
