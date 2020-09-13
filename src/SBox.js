import React, {useState, useRef} from 'react';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';
import {Search} from 'semantic-ui-react';
import data from './my.json';

function SBox(props){

    const [searchdata, setSearchdata] = useState("");
    const [isLoading, setLoading] = useState(false)
    const cval = useRef(_.debounce((val) => {
        document.title = val;
        setLoading(false);  
    }, 800)).current


    const handleSearch = (e, {value}) => {
        setSearchdata(value);
        setLoading(true);
        cval(value);
    }


    return <Search value={searchdata} onSearchChange={handleSearch} loading={isLoading} align={'center'}/>
}

export default SBox;
