import React from 'react';
import { StyleRoot } from 'radium';
import './App.css';
import Form from './components/Form/Form';

const App = () => {
  	return (
		<StyleRoot>
			<div className="App">
				<Form />
			</div>
		</StyleRoot>
  	);
}

export default App;
