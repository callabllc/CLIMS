import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import UncChart from './MyChart';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600
    },
    main: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
});

function BudgetCard(props){
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.main}>
                <Grid container spacing={24} direction="column">
                    <Grid item lg>
                        <Paper className={classes.paper}>Budget Title</Paper>
                    </Grid>
                    <Grid item lg>
                        <Paper className={classes.paper}>2σ = 5.1 in + 3.4 µin/in</Paper>
                    </Grid>
                    <Grid item xl>
                        <UncChart />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
  
BudgetCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BudgetCard);