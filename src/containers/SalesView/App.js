import React, { Component } from 'react'

import { connect } from 'react-redux'

// *** Actions
import { fetchRevenue } from '../../actions'
import { fetchNetExpenses } from '../../actions'
import { fetchBudget } from '../../actions'
import { fetchDTE } from '../../actions'
import { fetchProfitMargin } from '../../actions'
// *** Actions
import { fetchSalesOpps } from '../../actions'
import { fetchRepsQ2 } from '../../actions'

import './../../styles/finances.css';
import Chart from 'chart.js';
import './../../styles/salesView.css';


class SalesView extends Component {
  //  constructor(props){
  //     super(props)
  //     this.state = {
  //        oppsData: null
  //     }
  //  }
   componentDidMount(){
      //    this.props.fetchSalesOpps().then((results)=>{
      //          this.setState({
      //       oppsData: results.payload.data
      //    })
      // })
      var getSales1 = document.getElementById("sales1").getContext('2d');

      var sales1 = new Chart(getSales1, {
          type: 'bar',
          data: {
              labels: ['Sales','Goal'],
              datasets: [{
                  label: 'Nate A.',
                  data: [288900,300000],
                  backgroundColor: [
                      '#861985',
                      'rgb(54, 99, 235)',
                      '#a11734',
                      '#0e6223'

                  ],
                  borderColor: [
                      '#491050',
                      'rgba(54, 162, 235, 1)',
                      '#bf0c14',
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                legend: {
                  display: true,
                  labels: {
                    fontColor: 'red'
                  }
                },

                  yAxes: [{
                    gridLines: {
                   display: true ,
                   color: "white"
                   },
                      ticks: {
                          beginAtZero:true
                      }
                  }],
                  xAxes: [{
                   gridLines: {
                   display: false ,
                   color: "white"
                   },
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
         });






         var getSales2= document.getElementById("sales2").getContext('2d');

         var sales2 = new Chart(getSales2, {
             type: 'bar',
             data: {
                 labels: ['Sales','Goal'],
                 datasets: [{
                     label: 'Isaac C.',
                     data: [221500,280000],
                     backgroundColor: [
                         '#861985',
                         'rgb(54, 99, 235)',
                         '#a11734',
                         '#0e6223'

                     ],
                     borderColor: [
                         '#491050',
                         'rgba(54, 162, 235, 1)',
                         '#bf0c14',
                         'rgba(75, 192, 192, 1)'
                     ],
                     borderWidth: 1
                 }]
             },
             options: {
                 scales: {
                   legend: {
                     display: true,
                     labels: {
                       fontColor: 'red'
                     }
                   },

                     yAxes: [{
                       gridLines: {
                      display: true ,
                      color: "white"
                      },
                         ticks: {
                             beginAtZero:true
                         }
                     }],
                     xAxes: [{
                      gridLines: {
                      display: false ,
                      color: "white"
                      },
                         ticks: {
                             beginAtZero:true
                         }
                     }]
                 }
             }
            });




            var getSales3 = document.getElementById("sales3").getContext('2d');

            var sales3 = new Chart(getSales3, {
                type: 'bar',
                data: {
                    labels: ['Sales','Goal'],
                    datasets: [{
                        label: 'Tiffany M.',
                        data: [342000,300000],
                        backgroundColor: [
                            '#861985',
                            'rgb(54, 99, 235)',
                            '#a11734',
                            '#0e6223'

                        ],
                        borderColor: [
                            '#491050',
                            'rgba(54, 162, 235, 1)',
                            '#bf0c14',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                      legend: {
                        display: true,
                        labels: {
                          fontColor: 'red'
                        }
                      },

                        yAxes: [{
                          gridLines: {
                         display: true ,
                         color: "white"
                         },
                            ticks: {
                                beginAtZero:true
                            }
                        }],
                        xAxes: [{
                         gridLines: {
                         display: false ,
                         color: "white"
                         },
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
               });





               var getSales4 = document.getElementById("sales4").getContext('2d');

               var sales4 = new Chart(getSales4, {
                   type: 'bar',
                   data: {
                       labels: ['Sales','Goal'],
                       datasets: [{
                           label: 'Andrea P.',
                           data: [294500,280000],
                           backgroundColor: [
                               '#861985',
                               'rgb(54, 99, 235)',
                               '#a11734',
                               '#0e6223'

                           ],
                           borderColor: [
                               '#491050',
                               'rgba(54, 162, 235, 1)',
                               '#bf0c14',
                               'rgba(75, 192, 192, 1)'
                           ],
                           borderWidth: 1
                       }]
                   },
                   options: {
                       scales: {
                         legend: {
                           display: true,
                           labels: {
                             fontColor: 'red'
                           }
                         },

                           yAxes: [{
                             gridLines: {
                            display: true ,
                            color: "white"
                            },
                               ticks: {
                                   beginAtZero:true
                               }
                           }],
                           xAxes: [{
                            gridLines: {
                            display: false ,
                            color: "white"
                            },
                               ticks: {
                                   beginAtZero:true
                               }
                           }]
                       }
                   }
                  });
   }

   render(){
      return (
         <div>

           <div className="row some-space">
           </div>

           <div className="row">
           <div
           className="col-md-offset-2 col-md-8">

              <div className="panel panel-default">
                <div className="panel-heading">Sales Opporitunities</div>
                <table
                className="table-hover black-text"
                style= {
                   {
                    width: '100%',
                   marginTop: '10px',
                   marginLeft: '10px',
                   marginBottom: '10px'
                   }
                }>
                  <tr>
                     <th>Name</th>
                     <th>Stage</th>
                     <th>Value</th>
                    </tr>
                 <tr>
                     <td>Maximun HP</td>
                     <td>Qualified</td>
                     <td>34980</td>
                 </tr>
                 <tr>
                     <td>Universal N.LLC</td>
                     <td>Executive Sponsor</td>
                     <td>45790</td>
                 </tr>
                 <tr>
                     <td>CytoSport</td>
                     <td>Discovery</td>
                     <td>58230</td>
                 </tr>
                 <tr>
                     <td>Gaspari</td>
                     <td>Qualified</td>
                     <td>89760</td>
                 </tr>
                 <tr>
                     <td>Nutrex</td>
                     <td>Contracts</td>
                     <td>25650</td>
                 </tr>
                 <tr>
                     <td>ProSource</td>
                     <td>Discover</td>
                     <td>41100</td>
                 </tr>
                 <tr>
                     <td>MTech</td>
                     <td>Executive Sponsor</td>
                     <td>66340</td>
                 </tr>
                 <tr>
                     <td>Optimum</td>
                     <td>Contracts</td>
                     <td>22900</td>
                 </tr>
                 <tr>
                     <td>BSN</td>
                     <td>Discovery</td>
                     <td>89780</td>
                 </tr>
                 <tr>
                     <td>BioQuest</td>
                     <td>Qualified</td>
                     <td>55900</td>
                 </tr>
                </table>
              </div>

           </div>
           </div>

{/*
//ADD BAR CHARTS HERE */}
           {/* <div className="row">
           <div
           className="col-md-offset-2 col-md-8">
              Name: Reps
              <br />
              Data: ??
              <br />
              Chart Type: Bar Chart
           </div>

           </div> */}

           <div className="mother-div">

             <div className='chart'>
               <canvas id="sales1" width="15vw" height="15vw"></canvas>
             </div>

             <div className='chart'>
               <canvas id="sales2" width="15vw" height="15vw"></canvas>
             </div>

             <div className='chart'>
               <canvas id="sales3" width="15vw" height="15vw"></canvas>
             </div>

             <div className='chart'>
               <canvas id="sales4" width="15vw" height="15vw"></canvas>
             </div>


           </div>



       </div>



      )
   }
}

export default connect(null, { fetchRevenue, fetchNetExpenses, fetchBudget, fetchDTE, fetchProfitMargin })(SalesView)
