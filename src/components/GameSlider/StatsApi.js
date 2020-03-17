import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class StatsApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch("https://public-api.tracker.gg/v2/overwatch/standard/profile/battlenet/MirroR%2311669", {
      method: 'GET',
      headers: {  
        'TRN-Api-Key': 'd6cb4f92-76d2-4d61-83f6-7d5bda0bd524',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
      }
    })   
      .then(response => response.json())
      .then((responseData) => {
        this.setState({ isLoaded: true,  items: responseData['data']['segments']['0']['stats'], field: responseData['data']['segments']['0']['stats'], stats: Object.values(responseData['data']['segments']['0']['stats'])});
        // console.log(responseData['data']['segments']['0']['stats'])
        // console.log(Object.keys(responseData['data']['segments']['0']['stats']))
        // console.log(Object.values(responseData['data']['segments']['0']['stats']))
      })
      .catch(error => console.log(error));
  }

  render() {
    const { isLoaded, items, field, stats } = this.state;

    if(!isLoaded) {
      return (
      <div >
        <CircularProgress color="secondary" />
      </div>)
    } else {
      return(
        <ul>
          {stats.map(item => (
                        <Grid item>
                        <Card>
                            <CardContent>
                              <Typography gutterBottom variant="h4" component="h2">
                                <StatsApi/>
                                {item.displayValue}
                              </Typography>
                              <Typography variant="body1" color="textSecondary" component="p">
                               {item.displayName}
                              </Typography>
                            </CardContent>
                        </Card>
                      </Grid>
            // <li>
            //   {item.displayName}: {item.displayValue}
            // </li>
          ))}
          {/* {items.timePlayed.displayValue} */}
          {/* {field.timePlayed.displayName} */}
        </ul>
      )
    }
  }
}

export default StatsApi