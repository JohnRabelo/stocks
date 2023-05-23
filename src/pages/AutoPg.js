import GraphPlotItem from "../components/GraphPlot"
import autocl from './TechPg.module.css'

const API_DATA_AUTO = [
    {
        StockSymbol: 'RIVN',
        APIKEY: '0N5L9J4ODH3JIIKJ',
    },
    {
        StockSymbol: 'GM',
        APIKEY: '0N5L9J4ODH3JIIKJ',
    },
    {
        StockSymbol: 'F',
        APIKEY: '0N5L9J4ODH3JIIKJ',
    },
    {
        StockSymbol: 'GT',
        APIKEY: '0N5L9J4ODH3JIIKJ',
    },
]






function AUTO(){
    return (
    <div className={autocl.general}>

        <p className={autocl.stTitle}>Automotive - Daily Share Prices</p>
        {API_DATA_AUTO.map((ItemUnit) => {
            return <GraphPlotItem Stck={ItemUnit.StockSymbol} AK={ItemUnit.APIKEY}/>
        })}
        

    </div>
    )
}

export default AUTO