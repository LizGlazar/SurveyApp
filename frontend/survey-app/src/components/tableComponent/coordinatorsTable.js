import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';
import history from '../../history';

function CoordinatorsTable() {
    const [surveys, setSurveys] = useState([]);

    const [headers, setHeaders] = useState ({id: 'ID', surveyName: 'Survey Name', numberOfRespondents: 'Number of Respondents', startDate: 'Start Date', endDate: 'End Date', action: 'Action'});

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
    
    function deleteSurvey(id) {
        fetch('http://localhost:8080/surveys/' + id, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(
                (result) => {
                    console.log('Successfully deleted survey ' + id + ' ' + result);
                    window.location.reload();
                },
                (error) => {
                    console.log('Failed to delete survey' + id + ' ' + error);
                }
            )
        }

    function renderTableData() {
        return surveys.map((survey, index) => {
            const { id, surveyName, numberOfRespondents, startDate, endDate, published } = survey //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{surveyName}</td>
                    <td>{numberOfRespondents}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    <td>
                        <Button className="button-edit" variant="btn btn-success" onClick={() => history.push('/coordinators-edit-survey-page/' + id)} disabled={published}>EDIT</Button>
                        <Button className="button-delete" variant="btn btn-success" onClick={() => deleteSurvey(id)}>DELETE</Button>
                        <Button className="button-show-results" variant="btn btn-success" onClick={() => history.push('/coordinators-show-results-page/' + id)}>SHOW RESULTS</Button>
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
                    <div id='tableTitleAndButtonContainer'>
                    <h1 id='tableTitle'>Survey List</h1>
                    <Button id="button-create-new-survey-text" variant="btn btn-success" onClick={() => history.push('/coordinators-create-survey-page')}>CREATE NEW SURVEY</Button>
                    </div>
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
export default CoordinatorsTable;