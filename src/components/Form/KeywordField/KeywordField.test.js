import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { KeywordField } from './index';
import { findByTestAtr, testStore, checkProps } from '../../../utils/test-utils';

configure({adapter: new Adapter()});
const setup = (initialState = {}, props={}) => {
    const mockStore = testStore(initialState)
    const component = shallow(<KeywordField store={mockStore} {...props} />);
    return component;
};

describe('KeywordField Component', () => {
    let component;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

  
    const mockChangeKeywordValue = jest.fn();
    const mockProps = {
        keywordValue: 'Frontend Developer',
        changeKeywordValue: mockChangeKeywordValue,
    }
    
    beforeEach(() => {
        component = setup({}, mockProps);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'input-field-wrapper');

        expect(wrapper).not.toBeNull();
    });

    it('should call changeKeywordValue when input changes', () => {
        const input = findByTestAtr(component, 'keyword-input');

        input.simulate('change');

        expect(mockChangeKeywordValue).toHaveBeenCalled();
    });
    
    describe('checking proptypes', () => {
        it('should not throw a warning', () => {
            const propsErr = checkProps(KeywordField, mockProps);
            
            expect(propsErr).toBe(undefined);
        });
    });

    // it('categories button onClick changes state as expected', () => {
    //     const btn = findByTestAtr(component, 'toggle-btn');

    //     btn.simulate('click', {
    //         preventDefault: () => {},
    //     });

    //     expect(setState).toHaveBeenCalled();
    // });
});
