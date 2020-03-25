import React from 'react';
import { Avatar, Button, Typography, Badge } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chief from '../public/images/chief.jpg'
import Navbar from '../Header/Navbar';
import './Friends.css'
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import av1 from '../public/images/apexavatar1.jpg'
import av2 from '../public/images/apexavatar.png'
import av3 from '../public/images/csgoavatar.jpg'
import av4 from '../public/images/div2avatar.jpg'
import av5 from '../public/images/owavatar.jpg'
import av6 from '../public/images/ow2avatar.jpeg'
import av7 from '../public/images/fortavatar.jpeg'
import av8 from '../public/images/wowavatar.jpg'


const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const aliases = {
  Nickname: "MasterChef815",
  Discord: "Chief#4782",
  Steam: "The Chief",
  EpicGames: "XxChiefxX",
  Origin: "The_Chief",
  Battlenet: "TheChief#59071",
  Uplay: "MasterChef",
}

const online = [
  {
    name: 'Chief',
    avatar: Chief,
  }, {
    name: 'ApexMastaaa',
    avatar: av1,
  }, {
    name: 'XxxKillerxxX',
    avatar: av2,
  },

]

const offline = [

  {
    name: 'SumGuy',
    avatar: av3,
  }, {
    name: 'Awkward_Cat',
    avatar: av4,
  }, {
    name: 'The Thicc Walrus',
    avatar: av5,
  },
  {
    name: 'Stacy42',
    avatar: av6,
  }, {
    name: 'Dad',
    avatar: av7,
  }, {
    name: 'Meat Police',
    avatar: av8,
  },
]


class Friends extends React.Component {

  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render() {
    let filteredOnlineFriends = online.filter(
      (friend) => {
        return friend.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    let filteredOfflineFriends = offline.filter(
      (friend) => {
        return friend.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

  return (
    <div id='friends'>
      <Navbar nickname={aliases.Nickname}/>
      <h1>Your Friends
      </h1>
      <input type="text"
        className='searchbar' 
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}
      />
      <Button className='header1' variant="contained" color="secondary">
        Manage Friend List
      </Button>
      <Button className='header2' variant="contained" color="secondary">
        Add a Friend
      </Button>
      <h2>Online</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {filteredOnlineFriends.map(item => (
              <Grid item>
                <Card>
                  <CardContent height={150} width={220}>
                    <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                    >
                    <Avatar>
                      {' '}
                      <img className="user" src={item.avatar} alt="user icon" height="48" />{' '}
                    </Avatar>
                    </StyledBadge>
                    <Typography variant="h5"  component="p">
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <h2>Offline</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {filteredOfflineFriends.map(item => (
              <Grid item>
                <Card>
                  <CardContent height={150} width={220}>
                    <StyledBadge
                    className="offline"
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                    >
                    <Avatar>
                      {' '}
                      <img className="user" src={item.avatar} alt="user icon" height="48" />{' '}
                    </Avatar>
                    </StyledBadge>
                    <Typography variant="h5"  component="p">
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  </div>
  )
  }
}

export default Friends