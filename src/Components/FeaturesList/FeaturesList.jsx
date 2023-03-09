import React from 'react';
import FeatureItem from './FeatureItem/FeatureItem';

export default function FeaturesList(props) {

    let tableRowsJsx = [];
    for (let item of props.featureItems) {
        tableRowsJsx.push( 
            <FeatureItem 
                key={item.id} 
                item={item} 
                deleteFeatureItem={props.deleteFeatureItem} /> 
        );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Version</th>
                    <th>Year</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {tableRowsJsx}
            </tbody>
        </table>
    );
}