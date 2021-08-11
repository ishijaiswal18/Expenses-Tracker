import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props){
    const dataPointValues = props.DataPoints.map(data => data.value);
    const totalMax = Math.max(...dataPointValues);

    return(
        <div className = "chart">
            {props.DataPoints.map( data => (
                <ChartBar 
                key = {data.label}
                value = {data.value}
                maxValue = {totalMax}
                label = {data.label}
                />
            ))}
        </div>
    );
}

export default Chart;