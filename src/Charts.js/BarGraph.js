import React, { useEffect, useState } from "react";
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(...registerables);


const BarChart=()=>{
    const [chart,setChart]=useState([]);

    async function fetchData(){
        const data= await fetch("https://disease.sh/v3/covid-19/countries");
        const json= await data.json();
      //  console.log(json);
        setChart(json);
    }
    
    useEffect(()=>{
        fetchData();
    },[])

    const data={
        labels:chart?.map(x=>x.country),
        datasets:[
            {
                label:chart?.length,
                data:chart?.map(x=>x.cases),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    }
    const options={
        title:{
            display:true,
            Text:'BarChart'
        },
        maintainAspectRation: false,
        legend:{
            labels:{
                fontsize:26
            }
        },
        scales: {
            y: {
                min: 100,
                max:110000000
            }
        }
    }

    return <Bar className="bg-slate-100 m-5 p-2" data={data} height={120} options={options}/>
}
export default BarChart;