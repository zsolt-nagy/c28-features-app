import React from 'react';

export default function FeaturesList(props) {

    let tableRowsJsx = [];
    for (let featureItem of props.featureItems) {
        tableRowsJsx.push(
            <tr key={featureItem.id}>
                <td>{featureItem.feature}</td>
                <td>{featureItem.version}</td>
                <td>{featureItem.year}</td>
            </tr>
        );
    }


    return (
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Version</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {tableRowsJsx}
            </tbody>
        </table>
    );
}