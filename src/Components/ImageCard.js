import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
      
    maxWidth: 700,
    background:"rgba(0,0,0,0.5)",
    margin:"20px"
  }, 
  media:{
      height:440,
  },
  title:{
    fontFamily:'Nunito',
    fontWeight:'bold',
    fontSize:'2rem',
    color:'White'
  },
  desc:{
    fontFamily:'Nunito',
    fontSize:'1.1rem',
    color:'#318649'
  }
});

export default function ImageCard({place}) {
  const classes = useStyles();

  return (
    <Grid
    container
    spacing={8}
    direction="column"
    alignItems="center"
    justify="center"
   
   >
    <Grid item xs={6}>
        <Card className={classes.root} >
        <CardActionArea>
            <CardMedia
            className={classes.media }
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={place.imageUrl}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
                {place.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                {place.description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </Grid>      
    </Grid>
  );
}
