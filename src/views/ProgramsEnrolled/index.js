import React from 'react';
import Nav from '../../components/common/Nav.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProgramEnrolledCard from '../../components/common/ProgramEnrolledCard.js'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(3),
      }
  }));

export default function Dashboard() {
    const classes = useStyles();
    const programs = [
        {
            id:"1",
            title:"JA Leader Dialogue",
            attendence:"10/12",
            progress:50
        },
        {
            id:"2",
            title:"JA Leader Dialogue",
            attendence:"10/12",
            progress:50
        },{
            id:"3",
            title:"JA Leader Dialogue",
            attendence:"10/12",
            progress:50
        },
        {
            id:"4",
            title:"JA Leader Dialogue",
            attendence:"10/12",
            progress:50
        },
    ];
    let programCards = [];
    for (let i = 0; i < programs.length; ++i) {
        programCards.push(
            <Grid item xs={12} sm={12} md={6} lg={4} spacing={3} key={`item_${i}`}>
                <ProgramEnrolledCard program={programs[i]}/>
            </Grid>
        )
    }

  return (
    <div>
        <Nav />
        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={5}>
                { programCards }
            </Grid>
        </Container>

    </div>
    );
}