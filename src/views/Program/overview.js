import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
  }));
  export default function Overview(props) {
    const classes = useStyles();
    const {title, description, programLength, targetParticipants, classSize, language} = props.program;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
               {title}
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
                {description}
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Program Length: {programLength}
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Target Participants: {targetParticipants}
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Class Size: {classSize}
              </Typography>              
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Language: {language}
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Program Format: 
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Face-to-face program:  Minimum 150 students, led by a speaker at school 
              </Typography>
              <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Online program: Minimum 150 students, led by a speaker at online platforms
              </Typography>
            </Container>
          </div>
        </main>
      </React.Fragment>
    );
  }