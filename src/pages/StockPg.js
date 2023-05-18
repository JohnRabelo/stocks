import React from 'react';
import { useState, useEffect } from 'react';
import stockcl from './StockPg.module.css'
import Plot from 'react-plotly.js';

function Stock () {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedInfoX, setLoadedInfoX] = useState([]);
    const [loadedInfoY, setLoadedInfoY] = useState([]);

    
    const API_KEY= 'K80ILXOJ1J111G6I';
    let StockSymbol = 'MSFT';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;


    useEffect(()=>{
        setIsLoading(true);
        {/*fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=compact&apikey=K80ILXOJ1J111G6I')*/}
        fetch(API_Call)
        .then(response =>{
                return response.json();
            })
        .then(data =>{

            const auxInfoX = [];
            const auxInfoY = [];


            for (var key in data['Time Series (Daily)']){
                const infoItemX = {
                    id: key,
                    ...data[key]
                }

                auxInfoX.push(key);

                const infoItemY = {
                    id: key,
                    ...data['Time Series (Daily)'][key]['1. open']
                }

                auxInfoY.push(data['Time Series (Daily)'][key]['1. open']);
            }

            console.log(auxInfoY);
            
            setIsLoading(false);
            setLoadedInfoX(auxInfoX);
            setLoadedInfoY(auxInfoY);

            {/*for( var key in data['Time Series (Daily)']){
                stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']); 
            }

            pointerToThis.setState({
                stockChartXValues: stockChartXValuesFunction,
                stockChartYValues: stockChartYValuesFunction
            })*/}

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
        <div>
            <Plot
                data={[
                {
                    x: loadedInfoX,
                    y: loadedInfoY,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'rgb(16, 132, 77)'},
                }
                ]}
                layout={{width: 720, height: 440, title: 'Stock Price'}}
            />
        </div>
    );

};

export default Stock;