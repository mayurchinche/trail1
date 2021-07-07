import React from 'react';
import { makeStyles } from '@material-ui/core';
import ImageCard from './ImageCard';
import places from '../static/places';


const useStyles=makeStyles((theme)=>({
root :{

    minheight:'100vh',
    //display:'flex',
    justifyContent :'center',
    alignContent:'center' ,
    [theme.breakpoints.down()]:{
        flexDirection:'column',
    }

},

}));

function PlaceToVisit() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <ImageCard place ={places[0]}/>
            <ImageCard place ={places[0]}/>
            <ImageCard place ={places[0]}/>
            <ImageCard place ={places[0]}/>
            <ImageCard place ={places[0]}/>
            <ImageCard place ={places[0]}/>
        </div>
    )
}

export default PlaceToVisit
