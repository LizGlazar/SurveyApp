import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import Chart from '../chartComponent/chart';

function CoordinatorsShowResultsPage() {

  const initialChartData = {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets:[
      {
        label:'Population',
        data:[
          617594,
          181045,
          153060,
          106519,
          105162,
          95072
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
    ]
  }

  const [chartData, setChartData] = useState(initialChartData);

  return (
    <div className="create-survey-page-container">
      <form>
            <div className="input-group-create-survey-page">
            
              <label>Survey Name:</label>
              <input
                type="text"
                className="input-create-survey-page-name"
                
                />
                </div>
              <div className="input-group-create-survey-page">
              <label>Question:</label>
              <input
                type="text"
                className="input-create-survey-page-question"
                
                />
                </div>

              <div className="input-group-create-survey-page">
              <label>Answers:</label>
              <div> <ol type="A">
              <li><input
                type="text"
                className="input-show-results-page-answers"
                
                /></li>
                </ol>
                </div>
              </div>

              {/*chart implementation
              <div class="chart-container">
                <canvas id="survey-results-chart" width="800" height="450"></canvas>  
              </div>*/}

           
            
      
      </form>
      <Chart chartData={chartData} location="Massachusetts" legendPosition="bottom"/>
      <Ellipse />
    </div>
  );
}

export default CoordinatorsShowResultsPage;
