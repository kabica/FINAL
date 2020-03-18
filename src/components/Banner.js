import React from 'react'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import avatar from '../components/public/images/chief.jpg'
import battlenet from '../components/public/images/battlenet.png'
import discord from '../components/public/images/discord.png'
import epic from '../components/public/images/epicgames.png'
import origin from '../components/public/images/origin.png'
import steam from '../components/public/images/steam.png'
import uplay from '../components/public/images/ubisoft-white.png'
import Button from '@material-ui/core/Button';



function Banner( {stickyRef, aliases}) {
  console.log(aliases)
  return (
    <div className="container-banner" ref={stickyRef}>
      <img id="profilePic" src={avatar} alt="avatar"/>
      <h1>{aliases.Nickname}</h1>
      <List>
        <ListItemText><img className="logo" src={discord} alt="logo"/>{aliases.Discord}</ListItemText>
        <ListItemText><img className="logo" src={steam} alt="logo"/>{aliases.Steam}</ListItemText>
        <ListItemText><img className="logo" src={epic} alt="logo"/>{aliases.EpicGames}
          {/* <Button variant="contained">
          Edit Profile
          </Button> */}
        </ListItemText>
        <ListItemText><img className="logo" src={origin} alt="logo"/>{aliases.Origin}</ListItemText>
        <ListItemText><img className="logo" src={battlenet} alt="logo"/>{aliases.Battlenet}</ListItemText>
        <ListItemText><img className="logo" src={uplay} alt="logo"/>{aliases.Uplay}</ListItemText>
      </List>

    </div>
  )
}

export default Banner