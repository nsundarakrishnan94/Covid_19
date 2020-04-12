import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changableUrl=url;

    if(country){
        changableUrl= `${url}/countries/${country}`
    }
    try{
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changableUrl);

        return {confirmed,recovered,deaths,lastUpdate};
        // const modifiedData={
        //     confirmed: response.data.confirmed,
        //     recovered: response.data.recovered,
        //     death: response.data.deaths,
        //     lastUpdate: response.data.lastUpdate

        // }
        
        // return modifiedData;


    }
    
    catch(err){  
        return err;
       }
}


export const fetchDailyData= async()=>{

    try{
        const {data} = await axios.get(`${url}/daily`);

        return data.map(({confirmed,deaths, reportDate: date})=> ({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date: date
        }));
        

    }catch(error){
        return error;
    }

}





export const fetchCountries = async () =>{
try{
    const {data:{countries}}= await axios.get(`${url}/countries`);
    return countries.map((country)=>country.name);
}
catch(err){
return err;
}

};