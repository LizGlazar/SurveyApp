import React, { useState, useEffect } from 'react';
import Chart from '../chartComponent/chart';

function ShowResultsPage(props) {

  function getBackgroundColors(numberOfAnswers) {
    let colors = [];
    for (let i = 0; i < numberOfAnswers; i++) {
      colors.push(backgroundColors[i % backgroundColors.length]);
    }
    return colors;
  }

  const backgroundColors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)']

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
    let chartData = {
      labels: getAnswerTexts(question),
      datasets:[
        {
          label:'Number of Respondents',
          data: getAnswerData(question),
          backgroundColor: getBackgroundColors(question.answers.length)
        }
      ]
    };
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
        <div className="parent-container">  
      <div className="create-survey-page-container">

              <div className="input-group-create-survey-page">
              
                <label>Survey Name:</label>
                <input
                  type="text"
                  className="input-create-survey-page-name"
                  value={surveyResults.name}
                  disabled
                  />
                  </div>

        {surveyResults.questions.map((question, index) => {
          return (
            <div className = "canvas-container">
              <Chart chartData={buildChartData(question)} questionText={question.questionText} legendPosition="bottom"/>
            </div>
          )
        }
        )
        }
      </div>
        </div>
      );
    } else {
        return (
          <div className="parent-container">
            <div className="create-survey-page-container">
            <p>Loading...</p>
          </div>
          </div>
        )
      } 
}

export default ShowResultsPage;
