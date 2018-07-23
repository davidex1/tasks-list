import React from 'react';
import ReactDOM from 'react-dom';

// Material UI 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TasksList from './taskslist';

const App = () => (
    //Wrapping component in Material UI 
  <MuiThemeProvider>
    <TasksList />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));