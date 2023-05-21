import { useState, useEffect } from 'react';
import stockcl from './StockPg.module.css'
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


function Stock () {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedInfoX, setLoadedInfoX] = useState([]);
    const [loadedInfoY, setLoadedInfoY] = useState([]);
    const arr = [8, 20, -2, 4, -6]

    
    const API_DATA = [
        {
            API_Call: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=compact&apikey=K80ILXOJ1J111G6I`,
        },
        {
            API_Call: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=5min&outputsize=compact&apikey=K80ILXOJ1J111G6I`,
        },
        {
            API_Call: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=compact&apikey=K80ILXOJ1J111G6I`,
        }
    ]
    
    const API_KEY= 'K80ILXOJ1J111G6I';
    const counter = [0,1,2]


    useEffect(()=>{
        setIsLoading(true);
        let auxInfoX = [];
        let auxInfoY = [];
        let auxInfoXToPush = new Array();
        let auxInfoYToPush = new Array();

        let countI = 0;
        let countJ = 0;

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
            {counter.map(num => {
                console.log(loadedInfoX[0]);
                console.log(loadedInfoY[0]);
                return(
                    <Plot
                    data={[
                    {
                        x: loadedInfoX[num],
                        y: loadedInfoY[num],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'rgb(16, 132, 77)'},
                    }
                    ]}
                    layout={{width: 720, height: 440, title: 'Stocks'}}
                    />
                )
            })}

        </div>
    );

};

export default Stock;