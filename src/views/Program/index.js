import React, { useState } from 'react'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Nav from '../../components/common/Nav.js'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Overview from './overview'
import Materials from './materials'
import Submission from './submission'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import GradeIcon from '@material-ui/icons/Grade'
import BackupIcon from '@material-ui/icons/Backup'
import FeedbackIcon from '@material-ui/icons/Feedback'
import FolderIcon from '@material-ui/icons/Folder'
import AssignmentIcon from '@material-ui/icons/Assignment'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
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
}))

export default function Program() {
  const [currentTab, setCurrentTab] = useState('Overview')
  const classes = useStyles()
  const program = {
    title: 'JA Leader Dialogue',
    description:
      'The program enables students to learn from young role models and enhance their understanding of future workplace. Through the seminar, a leader will share with students their life stories, ups and downs in their career, role models, what they look for when hiring and advise students on the importance of life planning and life-long learning.',
    programLength: '1.5 hours (OLE learning time)',
    targetParticipants: 'Form 1 to Form 6 students',
    classSize: '150 students (minimum for school venue',
    language: 'English or Cantonese',
  }

  const renderView = (currentTab) => {
    switch (currentTab) {
      case 'Overview':
        return <Materials />
      case 'Materials':
        return <Materials />
      case 'Gradebook':
        return <Materials />
      case 'Submission':
        return <Submission />
      case 'Feedback':
        return <Materials />
    }
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
          <List>
            <ListItem button onClick={() => setCurrentTab('Overview')}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button onClick={() => setCurrentTab('Materials')}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Materials" />
            </ListItem>
            <ListItem button onClick={() => setCurrentTab('Gradebook')}>
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText primary="Gradebook" />
            </ListItem>
            <ListItem button onClick={() => setCurrentTab('Submission')}>
              <ListItemIcon>
                <BackupIcon />
              </ListItemIcon>
              <ListItemText primary="Submission" />
            </ListItem>
            <ListItem button onClick={() => setCurrentTab('Feedback')}>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <div className={classes.content}>{renderView(currentTab)}</div>
    </div>
  )
}
