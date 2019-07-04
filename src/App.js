import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

/** MATERIAL COMPONENTS**/
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

/** ROUTES **/
import Students from './routes/Students';
import Schools from './routes/Schools';
import Courses from './routes/Courses';

const useStyles = makeStyles(theme => ({
	root: {
	  marginTop: theme.spacing(3),
	}
  }));

function App() {

	const classes = useStyles();

	return (
		<Router>
			<div className="App">
				<AppBar position="static" color="primary">
					<Toolbar>
					<Typography variant="h6" color="inherit">
						Anno-in-Libro
					</Typography>
					</Toolbar>
				</AppBar>
				<Container className={classes.root} maxWidth="md">
					<Route path="/" exact component={Students} />
					<Route path="/schools" component={Schools} />
					<Route path="/courses/" component={Courses} />
				</Container>
			</div>
		</Router>
	);

}

export default App;
