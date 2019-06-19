import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


/** ROUTES **/
import Students from './routes/Students';
import Schools from './routes/Schools';
import Courses from './routes/Courses';



function App() {

	return (
		<Router>
			<div className="App">
				<Route path="/" exact component={Students} />
				<Route path="/schools" component={Schools} />
				<Route path="/courses/" component={Courses} />
			</div>
		</Router>
	);

}

export default App;
