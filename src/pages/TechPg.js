import GraphPlotItem from "../components/GraphPlot"
import techcl from './TechPg.module.css'

const API_DATA = [
    {
        StockSymbol: 'AAPL',
    },
    {
        StockSymbol: 'MSFT',
    },
    {
        StockSymbol: 'GOOGL',
    },
    {
        StockSymbol: 'AMZN',
    },

]



function Tech(){
    return (
    <div className={techcl.general}>
        {API_DATA.map((ItemUnit) => {
            return <GraphPlotItem Stck={ItemUnit.StockSymbol} />
        })}
        

    </div>
    )
}

export default Tech