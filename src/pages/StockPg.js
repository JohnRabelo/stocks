import { useState, useEffect } from 'react';
import stockcl from './StockPg.module.css'
import Plot from 'react-plotly.js';



function Stock () {

    const [isLoading, setIsLoading] = useState(true);
    let [loadedInfoX, setLoadedInfoX] = useState([]);
    let [loadedInfoY, setLoadedInfoY] = useState([]);

    
    const API_DATA = [
        {
            API_Call: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=compact&apikey=K80ILXOJ1J111G6I`,
            Id: 0,
        },
        {
            API_Call: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=5min&outputsize=compact&apikey=K80ILXOJ1J111G6I`,
            Id: 1,
        },
    ]
    

    useEffect(()=>{
        setIsLoading(true);
        let auxInfoX = [];
        let auxInfoY = [];
        let auxInfoXToPush = new Array();
        let auxInfoYToPush = new Array();

        API_DATA.map((ItemUnit) => {

            fetch(ItemUnit.API_Call)
            .then(response =>{
                    return response.json();
                })
            .then(data =>{
    
                console.log(data);

                for (var key in data['Time Series (5min)']){
                    auxInfoXToPush.push(key);
                    auxInfoYToPush.push(data['Time Series (5min)'][key]['1. open']);
                }

                auxInfoX.push(auxInfoXToPush);
                auxInfoY.push(auxInfoYToPush);

                auxInfoXToPush = [];
                auxInfoYToPush = [];
    
                console.log(auxInfoX);

                setLoadedInfoX(auxInfoX);
                setLoadedInfoY(auxInfoY);
    
                }
            )
               
        })

        setIsLoading(false);           
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
            {API_DATA.map((num) => {
                console.log(loadedInfoX[0]);
                console.log(loadedInfoY[0]);
                return(
                    <Plot
                    data={[
                    {
                        x: loadedInfoX[num.Id],
                        y: loadedInfoY[num.Id],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'rgb(16, 132, 77)'},
                    }
                    ]}
                    layout={{width: 720, height: 440, title: num.Id}}
                    />
                )
            })}

        </div>
    );

};

export default Stock;