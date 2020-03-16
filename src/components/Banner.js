import React from 'react'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import avatar from '../components/public/images/chief.jpg'
import battlenet from '../components/public/images/battlenet.png'
import discord from '../components/public/images/discord.png'
import epic from '../components/public/images/epicgames.png'
import origin from '../components/public/images/origin.png'
import steam from '../components/public/images/steam.png'
import uplay from '../components/public/images/uplay.png'

function Banner( {stickyRef}) {
  return (
    <div className="container-banner" ref={stickyRef}>
      <img id="profilePic" src={avatar} alt="avatar"/>
      <h1>MasterChef</h1>
      <List>
        <ListItemText><img className="logo" src={discord} alt="logo"/>Discord</ListItemText>
        <ListItemText><img className="logo" src={steam} alt="logo"/>Steam</ListItemText>
        <ListItemText><img className="logo" src={epic} alt="logo"/>Epic Games</ListItemText>
        <ListItemText><img className="logo" src={origin} alt="logo"/>Origin</ListItemText>
        <ListItemText><img className="logo" src={battlenet} alt="logo"/>Battle.net</ListItemText>
        <ListItemText><img className="logo" src={uplay} alt="logo"/>Uplay</ListItemText>
      </List>
    </div>
  )
}

export default Banner