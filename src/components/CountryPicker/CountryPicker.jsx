import React, {useState, useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';

const Countries = ({handleCountryChange})=>{

    const [countries, setCountries] = useState([]);

useEffect(()=>{
    const fetchAPI = async()=>{
        setCountries(await fetchCountries());
    };

    fetchAPI();
},[]);


console.log(Countries);







return(
    <FormControl className={styles.formControl}>
    <NativeSelect defaultValue="" onChange={(event)=>handleCountryChange(event.target.value)}>
    <option value="global">Global</option>
    {countries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
    </NativeSelect>
    </FormControl>
)

}

export default Countries;