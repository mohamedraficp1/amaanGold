import TradingViewWidget,{Themes} from 'react-tradingview-widget';


function TradingViewChart({symbol}) {
  return (
    <div className="charts" style={{height: "350px"}}> 
      <TradingViewWidget symbol={symbol} locale="fr" height="300px" theme={Themes.LIGHT} autosize/>
    </div>
  );
}

export default TradingViewChart;