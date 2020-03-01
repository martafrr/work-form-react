import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { LocationField } from './index';
import { findByTestAtr, checkProps } from '../../../utils/test-utils';

configure({adapter: new Adapter()});
const setup = (props) => shallow(<LocationField {...props} />);

describe('LocationField Component', () => {
    let component;

    const mockProps = {
        locationInputValue: 'Ber',
        locationList: ['Bergen', 'Berlin'],
        changeLocationValue: jest.fn(),
        fetchLocation: jest.fn(),
        setClickedLocation: jest.fn(),
    }
    beforeEach(() => {
        component = setup(mockProps);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'input-field-wrapper');

        expect(wrapper.length).toBe(1);
    });

    describe('checking proptypes should not throw a warning', () => {
        const propsErr = checkProps(LocationField, mockProps);
        
        expect(propsErr).toBe(undefined);
    });
});
