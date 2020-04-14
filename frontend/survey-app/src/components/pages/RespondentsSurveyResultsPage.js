import React, { useEffect } from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import Chart from '../chartComponent/chartComponent';

function RespondentsSurveyResultsPage() {

  return (
    <div id="create-survey-page-container">
        <h1 className='page-text'>Survey Results</h1>
      <form>
            <div id="input-group-create-survey-page">
            
              <label>Survey Name:</label>
             
              <input
                type="text"
                id="input-create-survey-page-name"
                
                />
                </div>
              <div id="input-group-create-survey-page">
              <label>Question:</label>
              <input
                type="text"
                id="input-create-survey-page-question"
                
                />
                </div>

              <div id="input-group-create-survey-page">
              <label>Answers:</label>
              <div> <ol type="A">
              <li><input
                type="text"
                id="input-show-results-page-answers"
                
                /></li>
                </ol>
                </div>
              </div>

              {/*chart implementation
              <div class="chart-container">
                <canvas id="survey-results-chart" width="800" height="450"></canvas>  
              </div>*/}

              <Chart /*chartData={this.state.chartData}*//>
            
      
      </form>
     

      <Ellipse />
    </div>
  );
}

export default RespondentsSurveyResultsPage;
