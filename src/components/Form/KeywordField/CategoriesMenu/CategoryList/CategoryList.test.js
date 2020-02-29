import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from './index';
import { findByTestAtr } from '../../../../../utils/test-utils';

const setup = (props = {}) => {
    const component = shallow(<CategoryList {...props} />);
    return component;
};

describe('HomePage Component', () => {
    let component;
    const mockProps = {
        categoryType: "topCategoriesChecked",
        categoryData: ["IT and telecommunication (4440)","Sales and Commerce (3263)"],
        categoriesChecked: [],
        onChange: jest.fn(),
    };
    beforeEach(() => {
        component = setup(mockProps);
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'category-container');

        expect(wrapper.length).toBe(2);
    });
});
