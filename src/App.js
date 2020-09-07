import React, {useState, useEffect} from 'react';
import data from './my.json';
import 'semantic-ui-css/semantic.min.css'
import './my.css'
import Getprices from './Getprices'


function App() {

  const initialPrices = data.map((item) => {
    return parseInt(item.price.replace(',', ''))
  })
  const [prices, setPrices] = useState(initialPrices);
  const [load, setLoad] = useState(true);


  useEffect(() => {window.history.pushState('', '','pc-parts')
  const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
  const wait = async (milliseconds = 2000) => {
    await sleep(milliseconds);
    setLoad(() => {return false});
     };

  wait()
  
  }, [])







    return (
      // <div style={{display: 'flex', justifyContent: 'space-around',  flexWrap: 'wrap'}}> 
      <div>
      <Getprices prices={prices} sub={true} load={load} /> </div>
      )
}

export default App;
