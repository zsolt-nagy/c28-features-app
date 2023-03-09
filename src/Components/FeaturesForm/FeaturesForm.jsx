import React from 'react';

export default function FeaturesForm(props) {
    const [feature, setFeature] = React.useState('');
    const [version, setVersion] = React.useState('');
    const [year, setYear] = React.useState('');

    function handleFeatureChange(event) {
        setFeature(event.target.value);
    }

    function handleVersionChange(event) {
        setVersion(event.target.value);
    }

    function handleYearChange(event) {
        setYear(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addFeatureItem(feature, version, year);
        setFeature('');
        setVersion('');
        setYear('');
    }

    return (
        <form action="#" method="GET" onSubmit={handleSubmit}>
            <div>
                <label>
                    Feature:
                    <input 
                        type="text" 
                        name="feature" 
                        value={feature} 
                        onChange={handleFeatureChange} />
                </label>
            </div>
            <div>
                <label>
                    Version:
                    <input 
                        type="text" 
                        name="version" 
                        value={version}
                        onChange={handleVersionChange} />
                </label>
            </div>
            <div>
                <label>
                    Year:
                    <input 
                        type="number" 
                        name="year" 
                        value={year}
                        onChange={handleYearChange} />
                </label>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>

        </form>
    );
}