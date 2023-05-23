import GraphPlotItem from "../components/GraphPlot"
import energycl from './TechPg.module.css'

const API_DATA_ENER = [
    {
        StockSymbol: 'BEPC',
        APIKEY: '6KC8W66GUNFZO4UW',
    },
    {
        StockSymbol: 'COP',
        APIKEY: '6KC8W66GUNFZO4UW',
    },
    {
        StockSymbol: 'CVX',
        APIKEY: '6KC8W66GUNFZO4UW',
    },
    {
        StockSymbol: 'NEE',
        APIKEY: '6KC8W66GUNFZO4UW',
    },
]






function Ener(){
    return (
    <div className={energycl.general}>

        <p className={energycl.stTitle}>Energy Sector - Daily Share Prices</p>
        {API_DATA_ENER.map((ItemUnit) => {
            return <GraphPlotItem Stck={ItemUnit.StockSymbol} AK={ItemUnit.APIKEY}/>
        })}
        

    </div>
    )
}

export default Ener