import GraphPlotItem from "../components/GraphPlot"
import techcl from './TechPg.module.css'

const API_DATA = [
    {
        StockSymbol: 'AAPL',
        APIKEY: 'K80ILXOJ1J111G6I',
    },
    {
        StockSymbol: 'MSFT',
        APIKEY: 'K80ILXOJ1J111G6I',
    },
    {
        StockSymbol: 'GOOGL',
        APIKEY: 'K80ILXOJ1J111G6I',
    },
    {
        StockSymbol: 'AMZN',
        APIKEY: 'K80ILXOJ1J111G6I',
    },
]






function Tech(){
    return (
    <div className={techcl.general}>

        <p className={techcl.stTitle}>Technology Sector - Daily Share Prices</p>
        {API_DATA.map((ItemUnit) => {
            return <GraphPlotItem Stck={ItemUnit.StockSymbol} AK={ItemUnit.APIKEY}/>
        })}
        

    </div>
    )
}

export default Tech