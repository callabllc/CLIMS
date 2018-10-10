import React, { Component } from 'react';
import { Chart } from 'primereact/chart';


export default class UncChart extends Component{
    render(){
        const data = {
            labels: ['UUT Resolution', 'Repeatability', 'LTS'],
            datasets: [
                {
                    data: [0.5, 3.2, 1.4],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ], hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        }

        return (
            <div>
                <div className="feature-intro">
                    <h1>Uncertainty Contributors [µin]</h1>
                </div>

                <div className="content-section implementation">
                    <Chart type="pie" data={data} />
                </div>
            </div>
        )
    }
}
