import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './StatsGrid.scss'
import StatsApi from './StatsApi'

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




];


export default function StatsGrid(props) {
  const classes = useStyles();

  // return (
  //   <Grid container className={classes.root} spacing={2}>
  //     <Grid item xs={12}>
  //       <Grid container justify="center" spacing={3}>
  //         {/* {stats.map(value => ( */}
  //           <Grid item>
  //             <Card className={classes.root}>
  //                 <CardContent className={classes.card}>
  //                   <Typography className={classes.pos} gutterBottom variant="h4" component="h2">
  //                     <StatsApi/>
  //                     {/* {value.stat} */}
  //                   </Typography>
  //                   <Typography variant="body1" color="textSecondary" component="p">
  //                    {/* {value.field} */}
  //                   </Typography>
  //                 </CardContent>
  //             </Card>
  //           </Grid>
  //         {/* ))} */}
  //       </Grid>
  //     </Grid>
  //   </Grid>
  // );
}
