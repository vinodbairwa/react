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
            console.log("category data", categoryData);
            setTempData(categoryData.data);

            const optionsResponse = await fetch("http://localhost:8000/product_options/get/");
            const optionsData = await optionsResponse.json();
            setOptionsData(optionsData.data);

            const subDataResponse = await fetch("http://localhost:8000/product_sub_options/get/");
            const subData = await subDataResponse.json();
            setSubData(subData.data);

            const FeatureDataResponse = await fetch("http://localhost:8000/features_product/get/");
            const FeatureData = await FeatureDataResponse.json();
            console.log("FeatureDatavghvccc",FeatureData.data)
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
            <nav>
                <button id="pricing" onClick={handlePricingClick}>Pricing</button>
            </nav>

            {showButtons && (
                <div id="buttonContainer">
                    <button id="One" onClick={() => setCategory("Matrix ONE")}>Matrix ONE</button>
                    <button id="EDGE" onClick={() => setCategory("Matrix EDGE")}>Matrix EDGE</button>
                    <button id="ALGO" onClick={() => setCategory("Matrix ALGO")}>Matrix ALGO</button>
                </div>
            )}

            <div className="main">
                {category && (
                    <>
                        {/* Passing handleCategorySelect as a prop */}
                        <FeaturedProducts 
                            category={category} 
                            tempData={tempData} 
                            handleCategorySelect={handleCategorySelect} 
                        />
                        <StandardizedPlans 
                            category={selectedCategoryId}
                            optionsData={optionsData} 
                            handleCategorySelect={handleCategorySelect} 
                        />
                        
                        <FavouriteOne 
                            category={selectedCategoryId} 
                            subData={subData} 
                            handleCategorySelect={handleCategorySelect} // Passing the handleCategorySelect function
                        />

                        <FeaturePlan
                            category={selectedCategoryId}
                            optionsData={FeatureData} 
                            handleCategorySelect={handleCategorySelect} />
                        

                    </>
                )}
            </div>
        </div>
    );
}


export default App;
