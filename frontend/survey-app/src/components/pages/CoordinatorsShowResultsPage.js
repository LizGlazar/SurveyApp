import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap'; // { { Button, Table}
import history from '../../history';
import Ellipse from '../ellipseComponent/ellipse';
import Chart from '../chartComponent/chart';

function CoordinatorsShowResultsPage(props) {

  const initialChartData = {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets:[
      {
        label:'Number of Respondents',
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
  function getAnswerTexts(question) {
    return question.answers.map((answer, index) => {
      return answer.answerText;
    });
  }

  function getAnswerData(question) {
    return question.answers.map((answer, index) => {
      return answer.numberOfRespondents;
    }
    )
  }

  function buildChartData(question) {
    let chartData = Object.assign({}, initialChartData);
    chartData.labels = getAnswerTexts(question);
    console.log(chartData.labels);
    chartData.datasets[0].data = getAnswerData(question); 
    return chartData;
  }


  const [surveyResults, setSurveyResults] = useState();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;

    fetch('http://localhost:8080/surveys/' + id + "/results", {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(
        (result) => {
            console.log(result);
            
            setSurveyResults(result);
            setIsLoaded(true);
        },
        (error) => {
            console.log(error);
            setIsLoaded(true);
        }
    )
  }, []) 

 
    if (isLoaded) {
      return (
      <div className="create-survey-page-container">
        <form>
              <div className="input-group-create-survey-page">
              
                <label>Survey Name:</label>
                <input
                  type="text"
                  className="input-create-survey-page-name"
                  value={surveyResults.name}
                  disabled
                  />
                  </div>

                {/*chart implementation
                <div class="chart-container">
                  <canvas id="survey-results-chart" width="800" height="450"></canvas>  
                </div>*/}

        </form>
        {surveyResults.questions.map((question, index) => {
          return <Chart chartData={buildChartData(question)} questionText={question.questionText} legendPosition="bottom"/>
        }
        )
        }
        
        <Ellipse />
      </div>
    
      );
    } else {
        return (
          <div className="create-survey-page-container">
            <p>Loading...</p>
          </div>
        )
      } 
}

export default CoordinatorsShowResultsPage;
