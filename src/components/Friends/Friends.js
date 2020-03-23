import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Slide, Button, Typography, Badge } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chief from '../public/images/chief.jpg'
import Navbar from '../Header/Navbar';
import './Friends.css'
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import av1 from '../public/images/apexavatar1.jpg'
import av2 from '../public/images/apexavatar.png'
import av3 from '../public/images/csgoavatar.jpg'
import av4 from '../public/images/div2avatar.jpg'
import av5 from '../public/images/owavatar.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

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

const friends = [
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
]



export default function Friends() {
  const classes = useStyles();

  return (
    <div id='friends'>
           <h1>Your Friends
        <Button variant="contained" color="secondary">
          Manage Friend List
        </Button>
        <Button variant="contained" color="secondary">
          Add a Friend
        </Button>
      </h1>
      <Navbar nickname={aliases.Nickname}/>
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Grid container justify="center" spacing={3}>
      {friends.map(item => (
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
  </div>
  )

  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4} container direction="row" justify="center" alignItems="center">
  //         <Paper className={classes.paper}>
  //         <StyledBadge
  //           overlap="circle"
  //           anchorOrigin={{
  //             vertical: 'bottom',
  //             horizontal: 'right',
  //           }}
  //           variant="dot"
  //         >
  //           <Avatar>
  //             {' '}
  //             <img className="user" src={Chief} alt="user icon" height="48" />{' '}
  //           </Avatar>
  //           </StyledBadge>
  //           <Typography variant="h5" className="user-list-name">
  //             Chief
  //           </Typography>
  //         </Paper>
  //       </Grid>
  //       <Grid item xs={4} container direction="row" justify="center" alignItems="center">
  //         <Paper className={classes.paper}>
  //         <StyledBadge
  //           overlap="circle"
  //           anchorOrigin={{
  //             vertical: 'bottom',
  //             horizontal: 'right',
  //           }}
  //           variant="dot"
  //         >
  //           <Avatar>
  //             {' '}
  //             <img className="user" src={Chief} alt="user icon" height="48" />{' '}
  //           </Avatar>
  //           </StyledBadge>
  //           <Typography variant="h5" className="user-list-name">
  //             Chief
  //           </Typography>
  //         </Paper>
  //       </Grid>
  //       <Grid item xs={4} container direction="row" justify="center" alignItems="center">
  //         <Paper className={classes.paper}>
  //         <StyledBadge
  //           overlap="circle"
  //           anchorOrigin={{
  //             vertical: 'bottom',
  //             horizontal: 'right',
  //           }}
  //           variant="dot"
  //         >
  //           <Avatar>
  //             {' '}
  //             <img className="user" src={Chief} alt="user icon" height="48" />{' '}
  //           </Avatar>
  //           </StyledBadge>
  //           <Typography variant="h5" className="user-list-name">
  //             Chief
  //           </Typography>
  //         </Paper>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  // return (
  //   <div id='friends' className={classes.root}>
      // <h1>Your Friends
      //   <Button variant="contained" color="secondary">
      //     Manage Friend List
      //   </Button>
      //   <Button variant="contained" color="secondary">
      //     Add a Friend
      //   </Button>
      // </h1>
      // <Navbar nickname={aliases.Nickname}/>
  //     <Grid container spacing={3}>
  //       <Grid container item xs={5} spacing={3}>
  //         <FormRow />
  //       </Grid>
  //       <Grid container item xs={5} spacing={3}>
  //         <FormRow />
  //       </Grid>
  //       <Grid container item xs={5} spacing={3}>
  //         <FormRow />
  //       </Grid>
  //     </Grid>
  //   </div>
  // );
}