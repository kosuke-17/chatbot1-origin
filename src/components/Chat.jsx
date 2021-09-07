import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Man from '../assets/img/pexels-yogendra-singh-3748221.png'
import Woman from '../assets/img/pexels-anastasia-shuraeva-5704849.png'

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'
  return (
      <ListItem className={classes}>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="icon" src={Woman} />
          ) : (
            <Avatar alt="icon" src={Man} />
          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
      </ListItem>
  )
}

export default Chat