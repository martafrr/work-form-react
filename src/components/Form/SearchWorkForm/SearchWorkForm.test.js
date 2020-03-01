import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { SearchWorkForm } from './index';
import { findByTestAtr, checkProps } from '../../../utils/test-utils';

configure({adapter: new Adapter()});
const setup = (props) => shallow(<SearchWorkForm {...props} />);

describe('SearchWorkForm Component', () => {
    let component;

    const mockProps = {
        location: 'Barcelona',
        categoriesChecked: ['IT'],
        clearForm: jest.fn()
    }
    beforeEach(() => {
        component = setup(mockProps);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'search-work-form');

        expect(wrapper.length).toBe(1);
    });

    it('checking proptypes should not throw a warning', () => {
        const expectedProps = {
            location: 'Barcelona', 
            categoriesChecked: ['IT'],
            clearForm: jest.fn()
        }
        const propsErr = checkProps(SearchWorkForm, expectedProps);
        
        expect(propsErr).toBe(undefined);
    });
});
