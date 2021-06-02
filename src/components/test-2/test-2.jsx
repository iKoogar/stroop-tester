import { Link } from 'react-router-dom'
import myClasses from './test-2.module.css'
import React from 'react';
import RandomWord from '../RandomWord/RandomWord'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
    background: '#999'
  }
}));



const Test2 = (props) => {
  const t2 = new Date()

  const classes = useStyles();

  function FormRow() {
    return (
      <>
        <Grid item xs={2}>
          <Paper className={classes.paper}><RandomWord test="2"/></Paper>
        </Grid>
        <Grid item xs={2}>
        <Paper className={classes.paper}><RandomWord test="2"/></Paper>
        </Grid>
        <Grid item xs={2}>
        <Paper className={classes.paper}><RandomWord test="2"/></Paper>
        </Grid>
        <Grid item xs={2}>
        <Paper className={classes.paper}><RandomWord test="2"/></Paper>
        </Grid>
        <Grid item xs={2}>
        <Paper className={classes.paper}><RandomWord test="2"/></Paper>
        </Grid>
      </>
    );
  }

  return (
    <>
      <div className={myClasses.grid}>
        <Grid container spacing={10} justify="space-evenly">
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={10} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>

      <Link to= {{
      pathname: "/test-3",
      test2Props:{
        time1: props.location.test1Props.time1,
        time2: t2
      }
    }}> 
      <button type="button" className={myClasses.StartBtn}>
        next
      </button>
    </Link>
    </>
  )
}

export default Test2
