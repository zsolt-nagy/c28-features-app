import React from 'react';
import './App.css';
import FeaturesForm from './Components/FeaturesForm/FeaturesForm';
import FeaturesList from './Components/FeaturesList/FeaturesList';

function App() {
  const [featureItems, setFeatureItems] = React.useState([
    {
      feature: 'Class syntax',
      version: 'ES6',
      year: 2015, 
      id: 1
    },
    {
      feature: 'Object destructuring',
      version: 'ES9', 
      year: 2018,
      id: 2
    }
  ]);

  function addFeatureItem(feature, version, year) {
    setFeatureItems(oldFeatureItems => {
      // Step 1: deep clone
      const newFeatureItems = structuredClone(oldFeatureItems);
      // Step 2: assemble the new feature items value 
      newFeatureItems.push({
        feature,
        version,
        year, 
        id: new Date().getTime()
      });
      // Step 3: return the assembled new value
      return newFeatureItems;
    });
  }

  function deleteFeatureItem(id) {
    setFeatureItems(oldFeatureItems => {
      // Step 1: deep clone
      let newFeatureItems = structuredClone(oldFeatureItems);
      // Step 2: assemble the new feature items value 
      newFeatureItems = newFeatureItems.filter(feature => feature.id !== id);
      // Step 3: return the assembled new value
      return newFeatureItems;
    });
  }


  return (
    <div className="App">
      <h1>JavaScript Features App</h1>
      <FeaturesForm addFeatureItem={addFeatureItem} />
      <FeaturesList 
        featureItems={featureItems} 
        deleteFeatureItem={deleteFeatureItem} />
    </div>
  );
}

export default App;
