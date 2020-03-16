import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 180,
    width: 150,
  },
  pos: {
    marginTop: 50,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function StatsGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {[0, 1, 2, 3, 4, 5, 6].map(value => (
            <Grid key={value} item>
              <Card className={classes.root}>
                  <CardContent className={classes.card}>
                    <Typography className={classes.pos} gutterBottom variant="h4" component="h2">
                      420 HRS
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                     TIME PLAYED
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
