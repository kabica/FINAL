import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './StatsGrid.scss'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  card: {
    height: 150,
    width: 220,
  },
  pos: {
    marginTop: 50,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const stats = [
  {
    stat: '51 HRS',
    field: 'TIME PLAYED'
  },
  {
    stat: '177',
    field: 'GAMES WON'
  },
  {
    stat: '1,605,254',
    field: 'ALL DAMAGE DONE'
  },
  {
    stat: '3,040',
    field: 'DEATHS'
  },
  {
    stat: '4,395',
    field: 'ELIMINATIONS'
  },
];


export default function StatsGrid() {
  const classes = useStyles();

  fetch("https://public-api.tracker.gg/v2/overwatch/standard/profile/battlenet/MirroR%2311669", {
    method: 'GET',
    headers: {  
      'TRN-Api-Key': 'd6cb4f92-76d2-4d61-83f6-7d5bda0bd524',
      'Accept': 'application/json',
      'Accept-Encoding': 'gzip',
      'mode': 'cors'
    }
  })   
    .then(response => response.json())
    .then((responseData) => {
      // this.setState({ author: responseData});
      console.log(responseData['data']['segments']['0']['stats'])
    })
    .catch(error => console.log(error));


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {stats.map(value => (
            <Grid key={value} item>
              <Card className={classes.root}>
                  <CardContent className={classes.card}>
                    <Typography className={classes.pos} gutterBottom variant="h4" component="h2">
                      {/* {value.stat} */}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                     {value.field}
                    </Typography>
                  </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
