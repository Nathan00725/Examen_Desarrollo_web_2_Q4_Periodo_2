'use client'

import { getCategoryCode } from '@/service/Api';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';  
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js'; 

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend); 

export default function CategoryCode() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Valor total de categorías',
                data: [],
                borderColor: 'rgb(75, 192, 192)',  
                backgroundColor: 'rgba(75, 192, 192, 0.2)',  
                fill: true 
            }
        ]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategoryCode();
                console.log(data);
                const categoryCode = data.map((item: any) => item.categoryCode);
                const puntos = data.map((item: any) => item.puntos); 
                setChartData({
                    labels: categoryCode, 
                    datasets: [{
                        label: 'Valor total de categorías',
                        data: puntos,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                        fill: true
                    }]
                });
            } catch (error) {
                console.log('Ocurrió un error', error);
            }
        };
        
        fetchData();
    }, []);
  
    return (
      <div>
          {
              chartData.labels.length > 0 ? ( 
                  <div>
                      <h3>Gráfico Lineal</h3>
                      <Line data={chartData} />  
                  </div>
              ) : (
                  <div>Loading..</div>
              )
          }
      </div>
    );
}



/* 
Este me costo mas de lo normal por que no me funcionadaba y tuve que ir a leer por cierto dejo el link 
https://www.chartjs.org/docs/latest/charts/line.html
de ahi tome los graficos, los colores si le pedi a una IA que me ayudara por que para eso soy malo, de ahi todo lo que se hizo
se hizo en clase entonces estoy bien 
*/