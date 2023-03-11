import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import FeaturesForm from './Components/FeaturesForm/FeaturesForm';
import FeaturesList from './Components/FeaturesList/FeaturesList';

const SERVER_URL = 'https://qxzje9-8080.csb.app';

function App() {
  const [featureItems, setFeatureItems] = useState([]);

  const loadData = () => {
    axios
      .get(SERVER_URL + '/api/features/')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setFeatureItems(response.data);
        } else {
          setFeatureItems([]);
        }
      })
      .catch((error) => {
        setFeatureItems([]);
      });
  }

  useEffect(loadData, []);

  function addFeatureItem(feature, version, year) {
    if (feature === '' || version === '' || year === '') {
      return;
    }
    axios.post(SERVER_URL + '/api/features/new', {
      feature,
      version,
      year
    }).then(loadData);
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
