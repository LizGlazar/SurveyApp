import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { //state is by default an object
         surveys: [
            { id: 1, surveyName: 'Customer Satisfaction', numberOfRespondents: 21, startDate: '10 May 2020', endDate: '10 May 2020', action: 'buttons'},
            { id: 2, surveyName: 'Customer Trust', numberOfRespondents: 19, startDate: '05 October 2020', endDate: '05 October 2020', action: 'buttons'},
            { id: 3, surveyName: 'Customer Attitudes', numberOfRespondents: 16, startDate: '25 December 2020', endDate: '25 December 2020', action: 'buttons'},
         ],

         headers: {id: 'ID', surveyName: 'Survey Name', numberOfRespondents: 'Number of respondents', startDate: 'Start Date', endDate: 'End Date', action: 'Action'}
      }
   }

   renderTableData() {
        return this.state.surveys.map((survey, index) => {
        const { id, surveyName, numberOfRespondents, startDate, endDate, action} = survey //destructuring
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{surveyName}</td>
                <td>{numberOfRespondents}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{action}</td>
            </tr>
        )
        })
    }
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
export default Table;