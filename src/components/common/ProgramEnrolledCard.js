import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 18,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProgramCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/program1.png"
          title="JA Leader Dialogue"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          JA Leader Dialogue
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            Attendance 10/12
          </Typography>
          <Grid container spacing={1}>
            <Grid item >
                <Typography variant="body2" color="textSecondary" component="p">
                Progress:
                </Typography>
            </Grid>
            <Grid item xs={9}>
                <BorderLinearProgress variant="determinate" value={50} />
            </Grid>
          </Grid>
          
         
          
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
