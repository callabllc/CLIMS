import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'primereact/chart';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import TocIcon from '@material-ui/icons/Toc';
import 'typeface-roboto';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
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
        width: 500,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 150,
    },
    textField2: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 120,
    },
      chart: {
        width: 500,
    }
});

class UncChart extends Component{
    render(){
        //const { classes } = this.props;
        const data = {
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [
                {
                    label: 'Uncertainty [µin]',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFA726',
                    backgroundColor: '#FFCC80'
                }
            ]   
        };

        return (                
            <div>
                <Typography gutterBottom variant="h6" component="h3">
                    Range Uncertainty Statement Calculation
                </Typography>
            
                <Chart type="line" data={data} />
            </div>
        )
    }
}

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
}

function LineItem({ children, dir, classes }){
    return (
        <Typography component="div" dir={dir}>
            <Grid container spacing={12} direction="row">
            <TextField className={classes.textField2}
                id="descr"
                label="Description"
                value={children.descr}
            />
            <TextField className={classes.textField2}
                id="type"
                label="Type"
                value={children.type}
            />
            <TextField className={classes.textField2}
                id="value"
                label="Value"
                value={children.value}
            />
            <TextField className={classes.textField2}
                id="distr"
                label="Distribution"
                value={children.distr}
            />
            </Grid>
        </Typography>
    );
}

class BudgetCard extends Component{
    state = {
        approver: 'Alex Cimaroli',
        dateSubmitted: '2018-01-01',
        dateApproved: '2018-01-02',
        reviewDate: '2019-01-02',
        tabValue: 0,
    };
    
    childTemplate1 = {
        descr: 'Resolution',
        type: 'A',
        value: 11.5,
        distr: 'Rectangular',
    };

    childTemplate2 = {
        descr: 'LTS',
        type: 'A',
        value: 1.5,
        distr: 'Gaussian',
    };

    childTemplate3 = {
        descr: 'Repeatability',
        type: 'B',
        value: 101,
        distr: 'Gaussian',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleTabChange = (event, value) => {
        this.setState({ tabValue: value });
    };

    render(){
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.main}>
                    <Grid container spacing={12} direction="row">
                        <Grid item lg>
                            <Grid container spacing={24}>
                                <Grid item lg>
                                    <Paper className={classes.paper}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        UNC-XXXX Budget Title for Range (YY to YY) Z
                                    </Typography>
                                    <Grid container spacing={10} direction="row">
                                        <Grid item sm>
                                            <TextField
                                                id="approver-name"
                                                label="Approver"
                                                className={classes.textField}
                                                value={this.state.approver}
                                                onChange={this.handleChange('approver')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item sm>
                                        <TextField
                                            id="date-submitted"
                                            label="Date Submitted"
                                            type="date"
                                            defaultValue="2018-01-01"
                                            value={this.state.dateSubmitted}
                                            className={classes.textField}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                            onChange={this.handleChange('dateSubmitted')}
                                            margin="normal"
                                        />
                                        </Grid>
                                        <Grid item sm>
                                        <TextField
                                            id="date-approved"
                                            label="Date Approved"
                                            type="date"
                                            defaultValue="2018-01-01"
                                            value={this.state.dateApproved}
                                            className={classes.textField}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                            onChange={this.handleChange('dateApproved')}
                                            margin="normal"
                                        />
                                        </Grid>
                                        <Grid item sm>
                                        <TextField
                                            id="review-date"
                                            label="Next Review"
                                            //type="date"
                                            defaultValue="2018-01-01"
                                            value={this.state.reviewDate}
                                            className={classes.textField}
                                            InputProps={{
                                            readOnly: true,
                                            }}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                            type="date"
                                            margin="normal"
                                        />
                                        </Grid>
                                    </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item lg>
                                    <Paper className={classes.paper}>
                                        <Typography gutterBottom variant="h6" component="h3">
                                            Unc(2σ) = 5.1 in + 3.4 µin/in
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xl>
                                    <UncChart classes={this.props.classes}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        <Grid item lg>
                            <Tabs
                                value={this.state.tabValue}
                                onChange={this.handleTabChange}
                                fullWidth
                                indicatorColor="secondary"
                                textColor="secondary"
                                scrollable
                                scrollButtons="auto"
                                >
                                <Tab icon={<TocIcon />} label="0 inches" />
                                <Tab icon={<TocIcon />} label="1 inch" />
                                <Tab icon={<TocIcon />} label="2 inches" />
                            </Tabs>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={this.state.tabValue}
                                >
                                <TabContainer dir={theme.direction}>
                                    <LineItem dir={theme.direction} children={this.childTemplate1} classes={this.props.classes}/>
                                    <LineItem dir={theme.direction} children={this.childTemplate2} classes={this.props.classes}/>
                                    <LineItem dir={theme.direction} children={this.childTemplate3} classes={this.props.classes}/>
                                </TabContainer>
                                <TabContainer dir={theme.direction}>
                                    <LineItem dir={theme.direction} children={this.childTemplate3} classes={this.props.classes}/>
                                    <LineItem dir={theme.direction} children={this.childTemplate2} classes={this.props.classes}/>
                                </TabContainer>
                                <TabContainer dir={theme.direction}>
                                    <LineItem dir={theme.direction} children={this.childTemplate1} classes={this.props.classes}/>
                                    <LineItem dir={theme.direction} children={this.childTemplate3} classes={this.props.classes}/>
                                    <LineItem dir={theme.direction} children={this.childTemplate2} classes={this.props.classes}/>
                                    <LineItem dir={theme.direction} children={this.childTemplate1} classes={this.props.classes}/>
                                </TabContainer>
                            </SwipeableViews>
                        </Grid>
                        
                    </Grid>
                </Paper>
            </div>
        );
    }

}
  
BudgetCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

export default withStyles(styles, {withTheme: true})(BudgetCard);