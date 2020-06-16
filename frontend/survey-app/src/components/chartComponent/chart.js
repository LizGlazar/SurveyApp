import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData,
      questionText: props.questionText
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  render(){
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text: this.state.questionText,
              fontSize:25,
              fontColor: 'white'
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition,
              labels: {
                fontColor: 'white'
              }
            },
            scales: {
                  xAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }}
        />
      </div>
    )
  }
}

export default Chart;