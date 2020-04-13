import React, { Component } from 'react'
import { Button } from 'reactstrap';
import history from '../../history';

class RespondentsTable extends Component {
   constructor(props) {
      super(props);
      /////
      /*this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);*/
      /////      
      this.state = { //state is by default an object
         surveys: [
            { id: 1, surveyName: 'Customer Satisfaction', startDate: '10 May 2020', endDate: '10 May 2020'},
            { id: 2, surveyName: 'Customer Trust', startDate: '05 October 2020', endDate: '05 October 2020'},
            { id: 3, surveyName: 'Customer Attitudes', startDate: '25 December 2020', endDate: '25 December 2020'},
         ],

         headers: {id: 'ID', surveyName: 'Survey Name', startDate: 'Start Date', endDate: 'End Date', action: 'Action'}
      }
   }

   renderTableData() {
        return this.state.surveys.map((survey, index) => {
        const { id, surveyName, startDate, endDate} = survey //destructuring
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{surveyName}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>
                    <div id="respondents-table-button-container">
                    <Button id="button-complete" variant="btn btn-success" onClick={() => history.push('/coordinators-edit-survey-page')}>COMPLETE</Button>
                
                    <Button id="button-show-results-green" variant="btn btn-success" onClick={() => history.push('/coordinators-edit-survey-page')}>SHOW RESULTS</Button>
                    </div>
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

    renderTableHeader() {
        let header = Object.keys(this.state.headers);
        return header.map((columnName, index) => {
            return <th key={columnName}>{this.state.headers[columnName]}</th>
        })
    }

    render() {
        return (
        <div>
            <h1 id='tableTitle'>Survey List</h1>
            
            <table id='surveys'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
            </table>
        </div>
        )
    }
}
export default RespondentsTable;