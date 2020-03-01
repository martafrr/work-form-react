import React from 'react';
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

const LocationField = ({
    locationInputValue,
    locationList,
    changeLocationValue,
    fetchLocation,
    setClickedLocation,
}) => {
    const clickLocale = e => {
        e.preventDefault();
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

    return (
        <InputFieldWrapper width="283px">
            <InputWrapper>
                <LocationInput 
                    value={locationInputValue}
                    placeholder="Location"
                    type="text"
                    onChange={e => changeValueInput(e.target.value)}
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
    locationList: PropTypes.array,
    locationInputValue: PropTypes.string,    
    changeLocationValue: PropTypes.func,
    fetchLocation: PropTypes.func,
    setClickedLocation: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationField);
