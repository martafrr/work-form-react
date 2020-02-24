import React from 'react';
import { StyleRoot } from 'radium';
import './App.css';
import FormWrapper from './components/Form/FormWrapper';

const App = () => {
  	return (
		<StyleRoot>
			<div className="App">
				<FormWrapper />
			</div>
		</StyleRoot>
  	);
}

export default App;
