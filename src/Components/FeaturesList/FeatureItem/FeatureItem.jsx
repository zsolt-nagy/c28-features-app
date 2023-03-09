import React from 'react';

export default function FeatureItem(props) {
    function handleDelete() {
        props.deleteFeatureItem(props.item.id);
    }

    return (
        <tr>
            <td>{props.item.feature}</td>
            <td>{props.item.version}</td>
            <td>{props.item.year}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>        
    );
}