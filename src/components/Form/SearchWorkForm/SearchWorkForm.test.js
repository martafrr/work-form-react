// import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure } from 'enzyme';
// import { SearchWorkForm } from './index';
// import { findByTestAtr } from '../../../utils/test-utils';

// configure({adapter: new Adapter()});
// const setup = (props) => shallow(<SearchWorkForm {...props} />);

// describe('SearchWorkForm Component', () => {
//     let component;
//     const setState = jest.fn();
//     const useStateSpy = jest.spyOn(React, 'useState');
//     useStateSpy.mockImplementation((init) => [init, setState]);

//     const mockProps = {
//         keywordValue: 'something',
//         changeKeywordValue: jest.fn(),
//     }
//     beforeEach(() => {
//         component = setup(mockProps);
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });
 
//     it('should render without errors', () => {
//         const wrapper = findByTestAtr(component, 'input-field-wrapper');

//         expect(wrapper.length).toBe(1);
//     });

// });
