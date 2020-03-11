import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputFieldWrapper from '../../../UI-design-system/InputFieldWrapper';
import { InputWrapper } from '../KeywordField/KeywordFieldStyles';
import { 
    changeLocationValue,
    fetchLocation,
    setClickedLocation,
} from '../../../store/actions/formActions';
import { locationListSelector, locationSelector } from '../../../store/selectors/formSelectors';
import {
    LocationInput,
    LocationListContainer,
    Location,
} from './LocationFieldStyles';

export const LocationField = ({
    submitForm,
    locationInputValue,
    locationList,
    changeLocationValue,
    fetchLocation,
    setClickedLocation,
}) => {
    const inputElement = useRef(null);

    const clickLocale = e => {
        e.preventDefault();
        inputElement.current.focus();
        setClickedLocation(e.target.value);
    };
    const changeValueInput = value => {
        changeLocationValue(value);
        if(value.length >= 3) {
            fetchLocation(value);
        }
    };

    const locationsList = locationList.map((locale, i) => 
        <Location 
            onClick={e => clickLocale(e)} 
            key={`${i}-locale`} 
            value={locale}
        >
            {locale}
        </Location>
    );

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            submitForm(e);
        }
    }

    return (
        <InputFieldWrapper width="283px" data-test="input-field-wrapper">
            <InputWrapper>
                <LocationInput 
                    ref={inputElement}
                    value={locationInputValue}
                    placeholder="Location"
                    type="text"
                    onChange={e => changeValueInput(e.target.value)}
                    onKeyPress={e => handleKeyPress(e)}
                    data-test="location-input"
                />
            </InputWrapper>
            <LocationListContainer>
                {locationsList}
            </LocationListContainer>
        </InputFieldWrapper>
    )
};

const mapStateToProps = state => ({
    locationList: locationListSelector(state),
    locationInputValue: locationSelector(state),
});

const mapDispatchToProps = dispatch => ({
    changeLocationValue: value => dispatch(changeLocationValue(value)),
    fetchLocation: value => dispatch(fetchLocation(value)),
    setClickedLocation: location => dispatch(setClickedLocation(location)),
});

LocationField.propTypes = {
    locationList: PropTypes.arrayOf(PropTypes.string),
    locationInputValue: PropTypes.string,    
    changeLocationValue: PropTypes.func,
    fetchLocation: PropTypes.func,
    setClickedLocation: PropTypes.func,
    submitForm: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationField);
