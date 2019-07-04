import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TableContainer from '../components/TableContainer/TableContainer';

const useStyles = makeStyles(theme => ({
    tableTitle: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    }
}));

function Schools() {

    const classes = useStyles();

    return (
        <div>
            <Paper>
                <Typography 
                    className={classes.tableTitle}
                    variant="h5"
                    gutterBottom
                >
                        Manage Schools
                </Typography>
                <TableContainer 
                    apiDataBaseRoute="schools"
                />
            </Paper>
        </div>
    );
}

export default Schools;