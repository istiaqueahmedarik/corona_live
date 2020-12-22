import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import './App.css'



function Graph() {
    const [latest, setLatest] = useState('');
    const [kal, setKal] = useState('');
    const [porsu, setPorsu] = useState('');
    useEffect(() => {
       
          
            Axios
            .get("https://corona.lmao.ninja/v3/covid-19/all")
           
          .then(r => {
            setLatest(r.data);
           
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      useEffect(() => {
       
          
        Axios
        .get("https://disease.sh/v3/covid-19/all?yesterday=true")
       
      .then(r => {
        setKal(r.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
       
          
    Axios
    .get("https://disease.sh/v3/covid-19/all?twoDaysAgo=true")
   
  .then(r => {
    setPorsu(r.data);
   
  })
  .catch((err) => {
    console.log(err);
  });
}, []);

      const data = {
        labels: ['Before', 'Yesterday', 'Today'],
        datasets: [
          {
            label: 'Cases',
            data: [porsu.todayCases, kal.todayCases, latest.todayCases],
            fill: false,
            backgroundColor: '#f1f5b3',
            borderColor: "#ffc107",
            hoverBackgroundColor: "red",
            pointRadius:"5"
          },
          {
            label: 'Die',
            data: [porsu.todayDeaths, kal.todayDeaths, latest.todayDeaths],
            fill: false,
            backgroundColor: 'rgb(244 5 5 / 36%)',
            borderColor: "#dc3545",
            hoverBackgroundColor: "red",
            pointRadius:"5"
          },
          {
            label: 'Recovered',
            data: [porsu.todayRecovered, kal.todayRecovered, latest.todayRecovered],
            fill: false,
            backgroundColor: '#4fbf47',
            borderColor: "#28a745",
            hoverBackgroundColor: "red",
            pointRadius:"5",
            

          },
        ],
      }
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      }



    return (
        <>
    <div className='header'>
      <h1 className='title'>Last 3 days data of Covid 19</h1>
      
    </div>
    <Line height="100px" data={data} options={options} />
  </>
    )
}

export default Graph
