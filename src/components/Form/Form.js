import React from 'react';
import { 
    formWrapper,
    formBackgorund,
} from './formStyles';
import HeaderText from '../UI/HeaderText';
import LocationInput from './LocationInput';

const Form = () => {
  	return (
        <div style={formBackgorund}>
            <div style={formWrapper}>
			    <HeaderText firstLine={true}>For a better working life</HeaderText>
			    <HeaderText firstLine={false}>The new XING Jobs</HeaderText>

                <LocationInput />
		    </div>
        </div>
  	);
}

export default Form;
