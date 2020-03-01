import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { KeywordField } from './index';
import { findByTestAtr, checkProps } from '../../../utils/test-utils';

configure({adapter: new Adapter()});

describe('KeywordField Component', () => {
    let component;

    const mockChangeKeywordValue = jest.fn();
    const mockProps = {
        keywordValue: 'Frontend Developer',
        changeKeywordValue: mockChangeKeywordValue,
    };

    const event = {
        preventDefault() {},
        target: { value: 'value' }
    };

    beforeEach(() => {
        component = shallow(<KeywordField {...mockProps} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'input-field-wrapper');

        expect(wrapper).not.toBeNull();
    });

    it('checking proptypes should not throw a warning', () => {
        const propsErr = checkProps(KeywordField, mockProps);
        
        expect(propsErr).toBe(undefined);
    });

    it('should call changeKeywordValue when input changes', () => {
        const input = findByTestAtr(component, 'keyword-input');
        input.simulate('change', event);
        
        const callback = mockChangeKeywordValue.mock.calls.length;
        expect(callback).toBe(1);
    });
});
