import React, {useState, useRef} from 'react';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';
import {Search, Grid, Label} from 'semantic-ui-react';
import data from './my.json';

function SBox(props){

    const [searchdata, setSearchdata] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [results, setResults] = useState([{"title": "Searching..."}]);
    const cval = useRef(_.debounce((val) => {
        document.title = val ? "Search - " + val : "";
        setLoading(false);
        const re = new RegExp(_.escapeRegExp(val), 'i');
        const isMatch = (result) => re.test(result.replace('-', ' '));
        const res = _.filter(data, (item) => isMatch(item.name)).map((item) => {return {'title': item.model, 'price': "₹" + item.price}});
        setResults(res);

    }, 500)).current


    const handleSearch = (e, {value}) => {
        setSearchdata(value);
        setLoading(true);
        cval(value);
    }


    return <Grid stackable={false}> 
            <Grid.Column verticalAlign="middle" largeScreen={2} mobile={8} only='widescreen'> <span className="menu_item" >PC Builder </span></Grid.Column>
            <Grid.Column largeScreen={3} mobile={8} textAlign="center" verticalAlign="middle"> 
            <Search fluid inverted size="large"
                value={searchdata} 
                onSearchChange={handleSearch} 
                loading={isLoading}  
                results={results}
            /> </Grid.Column>  </Grid>
}

export default SBox;
