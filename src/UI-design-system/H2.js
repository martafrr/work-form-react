import styled from 'styled-components';

export default styled.h2`
    color: white;
    font-weight: 100;
    font-size: 35px;
    margin: 0;
    padding-left: 25px;
    padding-top: ${props => (props.firstLine ? '45px' : '')};
    padding-bottom: ${props => (props.firstLine ? '5px' : '')};
`;
