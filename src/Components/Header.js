import { AppBar ,makeStyles,Toolbar,IconButton, Collapse} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import React ,{useEffect,useState} from 'react'
import { ExpandMore } from "@material-ui/icons";

const useStyles=makeStyles((theme)=>({
root:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh'
},
 appbar :{
     background :"none",
     fontFamily: 'Nunito',
     color:'#FFA500'

 },
 appbarWrapper :{
    width :'80%',
    margin :'0 auto'

 },
 appbarTitle:{
     textAlign:'left',
     margin :'0 auto',
     flexGrow :'1'

 },
 icon :{
     
    color:'#FFA500',
    fontSize:'2rem'
 },
 container :{
    textAlign :'center'
 },
 title:{
    color:'#FFA500',
    fontSize:'4.5rem'

 },
 goDown :{
    color:'Green',
    fontSize:'5rem'}
}));

function Header() {

    const classes=useStyles();
    const [checked ,setChecked ]= useState(false)

    useEffect( ()=>{
        setChecked(true);
    },[]  )
    return (
        <div className={classes.root}>
           <AppBar className ={classes.appbar} elevation={0}>
             <Toolbar className ={classes.appbarWrapper}>
                <h1 className ={classes.appbarTitle}>MyProfile</h1> 
               <IconButton>
                    <SortIcon className={classes.icon}/>
               </IconButton>
             </Toolbar>   
            </AppBar> 
            <Collapse
            in={checked}
            {...(checked ? {timeout :1000}:{})}
            collapsedHeight={50}>
            <div className={classes.container}>
                <h1 className={classes.title}>Welcome To<br/> <span>My Profile</span></h1>
                <IconButton >
                    <ExpandMore  className={classes.goDown}/>
                </IconButton>
            </div> 
            </Collapse>
            
        </div>
        
    )
}

export default Header
