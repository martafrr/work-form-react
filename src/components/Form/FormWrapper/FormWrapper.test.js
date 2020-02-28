import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import FormWrapper from './index';
import { findByTestAtr } from '../../../utils/test-utils';

configure({adapter: new Adapter()});
const setup = () => shallow(<FormWrapper />);

describe('HomePage Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'form-wrapper');

        expect(wrapper.length).toBe(1);
    });
});
