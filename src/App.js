import React, {useState, useEffect} from 'react';
import data from './my.json';
import 'semantic-ui-css/semantic.min.css'
import './my.css'
import Getprices from './Getprices'
import SBox from './SBox'


function App() {

  const initialPrices = data.map((item) => {
    return parseInt(item.price.replace(',', ''))
  })
  const [prices, setPrices] = useState(initialPrices);
  const [load, setLoad] = useState(true);






    return (
      // <div style={{display: 'flex', justifyContent: 'space-around',  flexWrap: 'wrap'}}> 
      <div>
      <SBox />
      <Getprices prices={prices} sub={true} load={load} /> </div>
      )
}

export default App;
