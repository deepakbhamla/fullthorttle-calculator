
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import './sidebar.style.css'

const useStyles = makeStyles({
  list: {
    width: 250,

  },
  fullList: {
    width: 'auto',
    
  },
  
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
    
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='sidebar-title'>
         <p>last calculation</p>
      </List>
      <Divider />
      <List className='sidebar-content'>
          <span className='alaram al'>  
          <ion-icon name="chevron-forward-circle-outline"></ion-icon>   
                    
          </span> 
          
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          <span className='alaram'>  
          <ion-icon name="chevron-back-circle-outline"></ion-icon>                 
          </span> 
        </Button>
        
        <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list()}
       </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}