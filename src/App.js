import React from 'react';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
// import coronaImage from './images/image.png';
class App extends React.Component{
    
    state = {
        data :{},
        country:'',

    }


    async componentDidMount(){
        const data = await fetchData();
        this.setState({data});
        // console.log(data);
    }

    handleCountryChange =async(country)=>{
        const data = await fetchData(country);
        this.setState({data , country : country});

        // console.log(data);
    }

    render(){
        const{data, country} =this.state;
        
        
        return (
            // <img className={styles.image} src={ coronaImage} alt="Corona"/>
            <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Charts data={data} country={country}/>
           
            </div>
        )
    }
}

export default App;