import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Nav from '../../components/common/Nav.js'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from './listItems';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    paddingTop: 50,
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
}));

export default function Dashboard() {
  const classes = useStyles();
    const program = {
        title: "JA Leader Dialogue"
    }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.appBar}>
      <Nav />
      </div>
      <Drawer
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
          }}
      >
        <Toolbar>
            <Typography>{program.title}</Typography>
        </Toolbar>
        <div className={classes.drawerContainer}>
        <List>{mainListItems}</List>
        </div>
      </Drawer>   
    </div>
  );
}