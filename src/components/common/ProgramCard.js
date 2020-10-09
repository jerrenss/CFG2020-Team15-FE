import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
          <Typography variant="body2" color="textSecondary" component="p">
          The program enables students to learn from young role models and enhance their understanding of future workplace. Through the seminar, a leader will share with students their life stories, ups and downs in their career, role models, what they look for when hiring and advise students on the importance of life planning and life-long learning.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Program Information
        </Button>
        <Button size="medium" color="primary">
          School Enrollment
        </Button>
      </CardActions>
    </Card>
  );
}
