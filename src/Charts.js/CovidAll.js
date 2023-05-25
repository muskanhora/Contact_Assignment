import React, { useEffect, useState } from "react";
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(...registerables);


const CovidAll=()=>{
   const [chart,setChart]=useState([]);

    async function fetchData(){
        const data= await fetch("https://disease.sh/v3/covid-19/all");
        const json= await data.json();
        setChart(json)
    }
    useEffect(()=>{
        fetchData();
    },[])

    const data={
        labels: Object.keys(chart),
        datasets:[
            {
                label:Object.keys(chart)?.length,
                data: Object.values(chart)?.map(x=>x),
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]
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
                fontsize:20
            }
        }
}

    return <Line className="bg-slate-100 m-5 p-2" data={data} height={100} options={options}/>
}
export default CovidAll;