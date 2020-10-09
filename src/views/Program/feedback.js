import React, { useState } from 'react'
import {
  Box,
  Typography,
  makeStyles,
  Theme,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Divider,
  Container,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(10),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notification: {
    marginBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(8),
    borderBottomColor: theme.palette.primary.dark,
  },
  divider: {
    color: theme.palette.primary.dark,
  },
}))

const Feedback = (props) => {
  const classes = useStyles(props)
  const [status, setStatus] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  function IconContainer(props) {
    const { value, ...other } = props
    return <span {...other}>{customIcons[value].icon}</span>
  }

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  }

  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth="md">
          <form className={classes.form}>
            <Grid container spacing={1}>
              <Grid item xs={4} lg={2}>
                <Typography>How was the pace of the workshop?</Typography>
              </Grid>
              <Grid item xs={8} lg={10}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="poc_name"
                  id="poc_name"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={4} lg={2}>
                <Typography>How was the pace of the workshop?</Typography>
              </Grid>
              <Grid item xs={8} lg={10}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="poc_designation"
                  id="poc_designation"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={4} lg={2}>
                <Typography>PHow was the pace of the workshop?</Typography>
              </Grid>
              <Grid item xs={8} lg={10}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="poc_email"
                  id="poc_email"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={4} lg={2}>
                <Typography>How was the pace of the workshop?</Typography>
              </Grid>
              <Grid item xs={8} lg={10}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="poc_contact_number"
                  id="poc_contact_number"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={4} lg={2}>
                <Typography>How was the pace of the workshop?</Typography>
              </Grid>
              <Grid item xs={8} lg={10}>
                <Rating
                  name="customized-icons"
                  defaultValue={2}
                  getLabelText={(value) => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
          </form>
        </Container>
      </Box>
    </>
  )
}

export default Feedback
