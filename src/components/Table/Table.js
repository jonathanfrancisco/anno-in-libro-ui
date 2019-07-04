import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    borderRadius: '10px'    
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
      marginRight: theme.spacing(1),
      fontSize: 18
  }
}));

function ResourceTable(props) {

    const classes = useStyles();
    const {data} = props;


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    function handleChangePage(event, newPage) {
        setPage(newPage);
    }
    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
    }

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    function handleDeleteDialogToggle() {
        setDeleteDialogOpen(!deleteDialogOpen);
    }
    function handleDeleteResource(id) {
        props.onDelete(id);
        setDeleteDialogOpen(!deleteDialogOpen);
    }
    

    return (
        <Table size="medium">
            <TableHead>
                <TableRow>
                    <TableCell>School Name</TableCell>
                    <TableCell align="center">Action(s)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                data
                .slice(page * rowsPerPage, page*rowsPerPage+rowsPerPage)
                .map(row => (
                <TableRow key={row.id}>
                    <TableCell 
                        component="th" 
                        scope="row"
                    >
                        {row.name}
                    </TableCell>
                    <TableCell align="center">
                        <Button 
                            onClick={handleDeleteDialogToggle}
                            className={classes.button}
                            variant="contained" 
                            color="secondary"
                        >
                            <Icon className={classes.leftIcon}>delete</Icon>
                            Delete
                        </Button>
                        <Dialog
                            open={deleteDialogOpen}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Delete Confirmation"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure you want to delete this school?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button 
                                onClick={handleDeleteDialogToggle}
                                color="default"
                                autoFocus
                            >
                                Cancel
                            </Button>
                            <Button 
                                onClick={() => handleDeleteResource(row.id)} 
                                color="secondary"
                            >
                                Yes
                            </Button>
                            </DialogActions>
                        </Dialog>
                        <Button 
                            className={classes.button} 
                            variant="contained"
                            color="default"
                        >
                            <Icon className={classes.leftIcon}>edit</Icon>
                            Edit
                        </Button>
                    </TableCell>
                </TableRow>
                ))
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination 
                        count={data.length}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    );
}

export default ResourceTable;