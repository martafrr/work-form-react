import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { CategoriesMenu } from './index';
import { findByTestAtr, checkProps } from '../../../../utils/test-utils';

configure({adapter: new Adapter()});
const setup = (props) => shallow(<CategoriesMenu {...props} />);

describe('CategoriesMenu Component', () => {
    let component;

    const mockProps = {
        topCategoriesData: ['IT'],
        moreCategoriesData: ['Advertising'],
        categoriesChecked: ['IT'],
        resetCategories: jest.fn()
    }
    beforeEach(() => {
        component = setup(mockProps);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'categories-container');

        expect(wrapper.length).toBe(1);
    });

    describe('checking proptypes should not throw a warning', () => {
        const propsErr = checkProps(CategoriesMenu, mockProps);
        
        expect(propsErr).toBe(undefined);
    });
});
