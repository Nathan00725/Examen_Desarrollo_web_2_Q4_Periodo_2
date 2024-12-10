'use client'

import { getsumar_categoryCod } from '@/service/Api';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js'; 

ChartJS.register(ArcElement, Title, Tooltip, Legend); 

export default function SumarCategoryCod() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Valor total de categorías',
                data: [],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(254, 93, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ]
            }
        ]
    });

    useEffect(() => {
        getsumar_categoryCod().then(data => {
            const categoryCodes = data.map((item: any) => item.categoryCode);
            const suma = data.map((item: any) => item.Suma); 
            console.log(categoryCodes, suma);
            setChartData({
                labels: categoryCodes, 
                datasets: [{
                    label: 'Valor total de categorías',
                    data: suma,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(254, 93, 132)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ]
                }]
            });
        })
        .catch((error) => {
            console.log('Ocurrió un error', error);
        });
    }, []);
  
    return (
      <>
      <div>
          {
              chartData.labels.length > 0 ? ( 
                  <div>
                      <h3>Gráfico de Dona Doughnut Chart</h3>
                     
                      <Doughnut data={chartData} /> 
                  </div>
              ) : (
                  <div>Loading..</div>
              )
          }
      </div>
      </>
    );
}