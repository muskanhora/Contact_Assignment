import React, { useEffect, useState } from "react";
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(...registerables);


const DatesChart=()=>{
   const [chart,setChart]=useState([]);

    async function fetchData(){
        const data= await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
        const json= await data.json();
        setChart(json)
    }
    useEffect(()=>{
        fetchData();
    },[])
   
    const data={
        labels:  Object.keys(chart)?.length>0 && Object.keys(chart?.cases)?.map(x=>x),
        datasets:[
            {
                label:'cases',
                data: Object.keys(chart)?.length>0 && Object.values(chart.cases)?.map(x=>x)
            },
            {
                label:'deaths',
                data: Object.keys(chart)?.length>0 && Object.values(chart.deaths)?.map(x=>x)
            },
            {
                label:'recovered',
                data: Object.keys(chart)?.length>0 && Object.values(chart?.recovered)?.map(x=>x)
            }   ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
            borderWidth: 1
    }
    const options={
        title:{
            display:true,
            Text:'BarChart'
        },
        scales: {
            y: {
                min: 0,
                max:700000000
            }
        },
        maintainAspectRation: false,
        responsive: true,
          
}
    return <Line className="bg-slate-100 m-5 p-2" data={data} height={120} options={options}/>
}
export default DatesChart;