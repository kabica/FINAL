import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './StatsApi.scss'

class StatsApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isLoaded: false,
      selection: null
    }
  }
  
  componentDidMount() {
    Promise.all([
      fetch("https://public-api.tracker.gg/v2/overwatch/standard/profile/battlenet/Fenrir%2313544", {
        method: 'GET',
        headers: {  
          'TRN-Api-Key': 'd6cb4f92-76d2-4d61-83f6-7d5bda0bd524',
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip',
        }
      }),
      fetch("https://public-api.tracker.gg/v2/division-2/standard/profile/uplay/Solivictus", {
        method: 'GET',
        headers: {  
          'TRN-Api-Key': 'd6cb4f92-76d2-4d61-83f6-7d5bda0bd524',
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip',
        }
      }),
      fetch("https://public-api.tracker.gg/v2/csgo/standard/profile/steam/76561198008049283", {
        method: 'GET',
        headers: {  
          'TRN-Api-Key': 'd6cb4f92-76d2-4d61-83f6-7d5bda0bd524',
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip',
        }
      }),
      fetch("https://public-api.tracker.gg/v2/splitgate/standard/profile/steam/76561198085274423", {
        method: 'GET',
        headers: {  
          'TRN-Api-Key': 'd6cb4f92-76d2-4d61-83f6-7d5bda0bd524',
          'Accept': 'application/json',
          'Accept-Encoding': 'gzip',
        }
      })
    ])
    // owpromise.then(response1 => {return response1.json()})
    // .then((data1) => {this.setState({isLoaded: true, Overwatch: Object.values(data1['data']['segments']['0']['stats'])})})
    // .catch(error => console.log(error));

    // div2promise.then(response2 => {return response2.json()})
    // .then((data2) => {this.setState({isLoaded: true, Division2: Object.values(data2['data']['segments']['0']['stats'])})})
    // .catch(error => console.log(error));

    // csgopromise.then(response3 => {return response3.json()})
    // .then((data3) => {this.setState({isLoaded: true, CounterStrike: Object.values(data3['data']['segments']['0']['stats'])})})
    // .catch(error => console.log(error));

    // splitgatepromise.then(response4 => {return response4.json()})
    // .then((data4) => {this.setState({isLoaded: true, Splitgate: Object.values(data4['data']['segments']['0']['stats'])})})
    // .catch(error => console.log(error));

      .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
      .then(([data1, data2, data3, data4]) => {
        this.setState({ 
          isLoaded: true,
          Overwatch: Object.values(data1['data']['segments']['0']['stats']), 
          Division2: Object.values(data2['data']['segments']['0']['stats']), 
          CounterStrike: Object.values(data3['data']['segments']['0']['stats']), 
          Splitgate: Object.values(data4['data']['segments']['0']['stats'])});
          console.log('Dataaaaa', Object.values(data3['data']['segments']['0']['stats']))
        })
        .catch(error => console.log(error));
      }
      render() {
        const { isLoaded, Overwatch, Division2, CounterStrike, Splitgate } = this.state;
        
    if(!isLoaded) {
      return (
      <div className="loading">
        <CircularProgress color="secondary"/>
      </div>)
    } else if (this.props.gameSelect  === 'Overwatch') {
        return (
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
            {Overwatch.map(item => (
              <Grid item>
                <Card>
                  <CardContent height={150} width={220}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {item.displayValue}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                      {item.displayName}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>
        )
      } else if (this.props.gameSelect  === 'Division 2') {
        return(
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
              {Division2.map(item => (
                <Grid item>
                  <Card>
                    <CardContent height={150} width={220}>
                      <Typography gutterBottom variant="h4" component="h2">
                        {item.displayValue}
                      </Typography>
                      <Typography variant="body1" color="textSecondary" component="p">
                        {item.displayName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              </Grid>
            </Grid>
          </Grid>
        )
      } else if (this.props.gameSelect  === 'Counter Strike') {
        return(
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
              {CounterStrike.map(item => (
                <Grid item>
                  <Card>
                    <CardContent height={150} width={220}>
                      <Typography gutterBottom variant="h4" component="h2">
                        {item.displayValue}
                      </Typography>
                      <Typography variant="body1" color="textSecondary" component="p">
                        {item.displayName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              </Grid>
            </Grid>
          </Grid>
        )
      } else if (this.props.gameSelect  === 'Splitgate') {
        return(
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
              {Splitgate.map(item => (
                <Grid item>
                  <Card>
                    <CardContent height={150} width={220}>
                      <Typography gutterBottom variant="h4" component="h2">
                        {item.displayValue}
                      </Typography>
                      <Typography variant="body1" color="textSecondary" component="p">
                        {item.displayName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              </Grid>
            </Grid>
          </Grid>
        )
      } else {
        return (
          <h2>No stats to display</h2>
        )
      }
    }
}


export default StatsApi