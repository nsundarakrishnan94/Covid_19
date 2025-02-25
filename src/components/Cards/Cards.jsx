import React from 'react';
import styles from './Cards.module.css';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return 'Loading!!';
    }
    // console.log(props);
return(
    <div className={styles.container}>
        <Grid container spacing={3} justify="center">

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5"> 
            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of active cases </Typography>
            </CardContent>
        
        </Grid>


        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5"> 
            <CountUp start={0} end= {recovered.value} duration={2.5} separator="," />
           </Typography>
            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of recovered cases </Typography>
            </CardContent>
        
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.death)}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom>Death</Typography>
            <Typography variant="h5">
            <CountUp start={0} end=  {deaths.value} duration={2.5} separator="," />
           </Typography>
            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of Death cases </Typography>
            </CardContent>
        
        </Grid>
        
        
        
        
        </Grid>
    
    
    </div>
)

}

export default Cards;