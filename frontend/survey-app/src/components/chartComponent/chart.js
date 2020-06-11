import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

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
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
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