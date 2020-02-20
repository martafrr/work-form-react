import styled from 'styled-components';

export default styled.h2`
    color: white;
    font-weight: 100;
    font-size: 35px;
    margin: 0;
    padding: ${props => (props.firstLine ? '40px 50px 5px;' : '5px 50px')};
`