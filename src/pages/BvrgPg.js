import GraphPlotItem from "../components/GraphPlot"
import bvrgcl from './TechPg.module.css'

const API_DATA_BVRG = [
    {
        StockSymbol: 'KO',
        APIKEY: 'SZDPRZDSXCXTPAVB',
    },
    {
        StockSymbol: 'PEP',
        APIKEY: 'SZDPRZDSXCXTPAVB',
    },
    {
        StockSymbol: 'ABEV',
        APIKEY: 'SZDPRZDSXCXTPAVB',
    },
    {
        StockSymbol: 'BUD',
        APIKEY: 'SZDPRZDSXCXTPAVB',
    },
]






function BVRG(){
    return (
    <div className={bvrgcl.general}>

        <p className={bvrgcl.stTitle}>Beverages - Daily Share Prices</p>
        {API_DATA_BVRG.map((ItemUnit) => {
            return <GraphPlotItem Stck={ItemUnit.StockSymbol} AK={ItemUnit.APIKEY}/>
        })}
        

    </div>
    )
}

export default BVRG