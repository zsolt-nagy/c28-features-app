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

  return (
    <div className="App">
      <h1>JavaScript Features App</h1>
      <FeaturesForm />
      <FeaturesList featureItems={featureItems} />
    </div>
  );
}

export default App;
