import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


function Sidebar() {

  return (
    <div className="sidebar">
      <List disablePadding dense>
        <ListItem button id="logo">
          <ListItemText>
            <a href="#home">GAMETRAX</a>
          </ListItemText>
          {/* <ListItemText>GAMETRAX</ListItemText> */}
        </ListItem>
        <ListItem button>
          <ListItemText>
            <a href="#profile">username</a>
          </ListItemText>
          {/* <ListItemText>"username"</ListItemText> */}
        </ListItem>
        <ListItem button>
          <ListItemText>
            <a href="#discover">Discover Games</a>
          </ListItemText>
          {/* <ListItemText>Discover Games</ListItemText> */}
        </ListItem>
        <ListItem button>
          <ListItemText>
          <a href="#friends">Friends</a>
          </ListItemText>
          {/* <ListItemText>Friends</ListItemText> */}
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar