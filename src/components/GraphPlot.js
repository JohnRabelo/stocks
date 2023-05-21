import plotcl from './GraphPlot.module.css'
import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';



function quickSort (arr){
    if (arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length - 1]
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i ++){
        if (arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}


function GraphPlotItem(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedInfoX, setLoadedInfoX] = useState([]);
    const [loadedInfoY, setLoadedInfoY] = useState([]);
    const arr = [8, 20, -2, 4, -6]
    console.log(quickSort(arr))
    
    
    const API_KEY= 'K80ILXOJ1J111G6I';
    let StockSymbol1 = props.Stck;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol1}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
    let StockSymbol2 = 'AMZN';
    let API_Call2 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol2}&interval=5min&outputsize=compact&apikey=${API_KEY}`;

    useEffect(()=>{
        setIsLoading(true);
        fetch(API_Call)
        .then(response =>{
                return response.json();
            })
        .then(data =>{

            console.log(data);
            const auxInfoX = [];
            const auxInfoY = [];


            for (var key in data['Time Series (5min)']){
                auxInfoX.push(key);
                auxInfoY.push(data['Time Series (5min)'][key]['1. open']);
            }

            console.log(auxInfoY[0]);
            
            setIsLoading(false);
            setLoadedInfoX(auxInfoX);
            setLoadedInfoY(auxInfoY);

            }
        )           
    },[])




    if (isLoading){
        return(
            <section>
                <p>Loading . . .</p>
            </section>
        )
    }



    return(
        <div className={plotcl.plotContainer}>
            <Plot className={plotcl.plotElem}
                data={[
                {
                    x: loadedInfoX,
                    y: loadedInfoY,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'rgb(16, 132, 77)'},
                }
                ]}
                layout={{title: props.Stck}}
            />
        </div>
    );

};

export default GraphPlotItem;