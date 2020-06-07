import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';
import history from '../../history';

function RespondentsTable() {
    const [surveys, setSurveys] = useState([]);

    const [headers, setHeaders] = useState ({id: 'ID', surveyName: 'Survey Name', startDate: 'Start Date', endDate: 'End Date', action: 'Action'});

    const [error, setError] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/surveys', {
            credentials: 'include'
          })
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result);
                setIsLoaded(true);
                setSurveys(result);
            },
            (error) => {
                console.log(error);
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []) 

    function renderTableData() {
        return surveys.map((survey, index) => {
            const { id, surveyName, numberOfRespondents, startDate, endDate} = survey //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{surveyName}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    <td>
                        <div className="respondents-table-button-container">
                        <Button className="button-complete" variant="btn btn-success" onClick={() => history.push('/respondents-survey-page/' + id)}>COMPLETE</Button>
                        <Button className="button-show-results-green" variant="btn btn-success" onClick={() => history.push('/respondents-survey-results-page/' + id)}>SHOW RESULTS</Button>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    function renderTableHeader() {
        let header = Object.keys(headers);
        return header.map((columnName, index) => {
            return <th key={columnName}>{headers[columnName]}</th>
        })
    }

    if (isLoaded) {
        if (error) {
            return (
                <div style={{color: "white"}}>Error loading surveys: {error.message}</div>
            )
        } else {
            return (
                <div>
                    <h1 id='tableTitle'>Survey List</h1>
                    <table id='surveys'>
                        <tbody>
                            <tr>{renderTableHeader()}</tr>
                            {renderTableData()}
                        </tbody>
                    </table>
                </div>
                )
        }
    } else {
        return (
            <div style={{color: "white"}}>Loading...</div>
        )
    }
}
export default RespondentsTable;