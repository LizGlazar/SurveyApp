import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';
import history from '../../history';

function CoordinatorsTable() {
   /*constructor(props) {
      super(props);
      /////
      /*this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);*/
      /////      */
    const [surveys, setSurveys] = useState([
        /*{ id: 1, surveyName: 'Customer Satisfaction', numberOfRespondents: 21, startDate: '10 May 2020', endDate: '10 May 2020'},
        { id: 2, surveyName: 'Customer Trust', numberOfRespondents: 19, startDate: '05 October 2020', endDate: '05 October 2020'},
        { id: 3, surveyName: 'Customer Attitudes', numberOfRespondents: 16, startDate: '25 December 2020', endDate: '25 December 2020'},*/
    ]);

    const [headers, setHeaders] = useState ({id: 'ID', surveyName: 'Survey Name', numberOfRespondents: 'Number of Respondents', startDate: 'Start Date', endDate: 'End Date', action: 'Action'});

    const [error, setError] = useState(null);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/surveys')
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

    /* this.setState({ //state is by default an object
         surveys: [
            { id: 1, surveyName: 'Customer Satisfaction', numberOfRespondents: 21, startDate: '10 May 2020', endDate: '10 May 2020'},
            { id: 2, surveyName: 'Customer Trust', numberOfRespondents: 19, startDate: '05 October 2020', endDate: '05 October 2020'},
            { id: 3, surveyName: 'Customer Attitudes', numberOfRespondents: 16, startDate: '25 December 2020', endDate: '25 December 2020'},
         ],

         headers: {id: 'ID', surveyName: 'Survey Name', numberOfRespondents: 'Number of Respondents', startDate: 'Start Date', endDate: 'End Date', action: 'Action'}
      });*/
    
    function deleteSurvey(id) {
        fetch('http://localhost:8080/surveys/' + id, {method: 'DELETE'})
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
        const { id, surveyName, numberOfRespondents, startDate, endDate } = survey //destructuring
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{surveyName}</td>
                <td>{numberOfRespondents}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>
                    <Button id="button-edit" variant="btn btn-success" onClick={() => history.push('/coordinators-edit-survey-page/' + id)}>EDIT</Button>
                    <Button id="button-delete" variant="btn btn-success" onClick={() => deleteSurvey(id)}>DELETE</Button>
                    <Button id="button-show-results" variant="btn btn-success" onClick={() => history.push('/coordinators-edit-survey-page')}>SHOW RESULTS</Button>
                </td>
            </tr>
        )
        })
    }
    
    /////
    /*https://stackoverflow.com/questions/40415846/remove-a-specific-table-row-on-onclick-event-in-react-component
    https://www.pluralsight.com/guides/removing-items-react
    */

    ///
    /*handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.props.w +''+this.props.t,
            id: Date.now()
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

    delete(id){          // How does the function know the ID of an item that needs to be deleted and how does it delete the item?
        this.setState(this.item.id)
    }

/////*/

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