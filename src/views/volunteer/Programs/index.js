import React from 'react'
import VolunteerNav from '../../../components/common/VolunteerNav.js'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ProgramCard from '../../../components/common/ProgramCard.js'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(3),
  },
}))

export default function Programs() {

    const classes = useStyles();
    const programs = [1,2,3,4,5,6,7,8,9];
    let programCards = [];
    for (let i = 0; i < programs.length; ++i) {
        programCards.push(
            <Grid item xs={12} sm={12} md={6} lg={4} spacing={3} key={`item_${i}`}>
                <ProgramCard />
            </Grid>
        )
    }

  return (
    <div>
      <VolunteerNav />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={5}>
          {programCards}
        </Grid>
      </Container>
    </div>
  )
}
