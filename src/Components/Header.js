import { AppBar ,makeStyles,Toolbar,IconButton} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import React from 'react'

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
 }

}));

function Header() {
    const classes=useStyles();
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
            <div className={classes.container}>
                <h1>Welcome To<br/> <span>My Profile</span></h1>

            </div>
        </div>
        
    )
}

export default Header
