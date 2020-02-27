import styled from 'styled-components';

export default styled.p`
    font-size: 14px;
    display: inline-block;
    width: ${props => (props.width ? props.width : '')};
    margin: ${props => (props.margin ? props.margin : '')};
    color: ${props => (props.color ? props.color : 'black')};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : '')};
`;
