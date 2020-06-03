import React, { useEffect } from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import Chart from '../chartComponent/chart';

function RespondentsSurveyResultsPage() {

  return (
    <div className="create-survey-page-container">
        <h1 className='page-text'>Survey Results</h1>
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

              <Chart /*chartData={this.state.chartData}*//>
            
      
      </form>
     

      <Ellipse />
    </div>
  );
}

export default RespondentsSurveyResultsPage;
