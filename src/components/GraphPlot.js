import plotcl from './GraphPlot.module.css'
import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function GraphPlotItem(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedInfoX, setLoadedInfoX] = useState([]);
    const [loadedInfoY, setLoadedInfoY] = useState([]);
    const arr = [8, 20, -2, 4, -6]
    
    
    const API_KEY= props.AK;
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

    let TitleSz = 80;
    let AxisSz = 40;
    let MgLf= 150;
    let MgTp = 200;
    let Hght = 1400;
    const windowSize = window.innerWidth;
    if (windowSize < 600){
        TitleSz = 40;
        AxisSz = 10;
        MgLf = 50;
        Hght = 600;
        MgTp = 150;
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
                layout={{ height: Hght, margin: {l: MgLf, r: 50, b: 160, t: MgTp, pad: 4 } ,title: {text: props.Stck, font:{size: TitleSz}}, font:{size: AxisSz} } }
                
            />
        </div>
    );

};

export default GraphPlotItem;