import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

defaults.maintainAspectRatio = false;
// defaults.responsive = true;



function SaldoGeral() {

const [dataJson, setDataJson] = useState([]);

const requestData = async () => {
    const getData = await fetch('http://localhost:3000/api/dashboard');
    const data = await getData.json();
    console.log(data);
    return data;
}

useEffect( () => {
    requestData().then( (data) => {
        setDataJson(data);
    });
  
    
}, []);



const data = {
  labels: [
    'Receita do Mês',
    'Despesas',
    'Lucro'
  ],
  datasets: [{ 
    label:"R$: ",
    data: [dataJson.receitasMes, dataJson.despesasMes, dataJson.saldoMes],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

    const config = {
        type: 'pie',
        data: data,
    } 
    return (
        <>
        <Pie data={data} />
        </>
  

  );
}

export default SaldoGeral;