import React, { Fragment } from 'react';
import { Button, Title, Tag} from "rbx";
import Moment from 'moment';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

function ListNotes(props) {
  return (
    <Fragment>
      <Container fixed id='container'>
          <div className='titleMenu'>
          <h2>
            <strong>{props.notes.length} Notes</strong>
          </h2>
          <Button state="active" color="custom-purple" outlined size="small" onClick={() => props.createNote()}> Notes + </Button></div>
      </Container>
      <Divider/>
      <List component="nav" aria-label="main mailbox folders">
        {props.notes.map((item, key) =>
          <ListItemButton
          selected={item == props.current_note}
          onClick={() => props.selectNote(item._id)}
          >
          <ListItemText primary={item.title.replace(/(<([^>]+)>)/ig, "").substring(0,15)} secondary= {item.body.replace(/(<([^>]+)>)/ig, "").substring(0,30)} />
          <div className='deleteAnddata'>
            <Tag color="dark">
              {Moment(item.created_at).format('DD/MM')}
            </Tag>
            <br></br>
            <FontAwesomeIcon 
                  icon={faTrash} 
                  color="grey"
                  onClick={() => props.deleteNote(item)}
            />
          </div>  
          </ListItemButton>
        )}
      </List>
    </Fragment>
  )
}

export default ListNotes;