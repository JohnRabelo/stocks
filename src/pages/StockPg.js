import { useState, useEffect } from 'react';
import stockcl from './StockPg.module.css'
import Plot from 'react-plotly.js';

function Stock () {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedInfoX, setLoadedInfoX] = useState([]);
    const [loadedInfoY, setLoadedInfoY] = useState([]);

    
    const API_KEY= 'K80ILXOJ1J111G6I';
    let StockSymbol = 'MSFT';
    let API_Call_Daily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;

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

            console.log(auxInfoY);
            
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
                layout={{width: 720, height: 440, title: StockSymbol}}
            />
        </div>
    );

};

export default Stock;