import React, {useState} from 'react';
import data from './my.json';
import 'semantic-ui-css/semantic.min.css'
import './my.css'
import Getprices from './Getprices'
import SBox from './SBox'
import {Segment, Header, Menu} from 'semantic-ui-react';


function App() {

  const initialPrices = data.map((item) => {
    return parseInt(item.price.replace(',', ''))
  })
  const [prices, setPrices] = useState(initialPrices);
  const [load, setLoad] = useState(true);






    return (
      // <div style={{display: 'flex', justifyContent: 'space-around',  flexWrap: 'wrap'}}> 
      <div>
      <Segment padded={'small'} inverted className="search">
        <SBox />
      </Segment>
      <Getprices prices={prices} sub={true} load={load} />  </div>  
      )
}

export default App;
