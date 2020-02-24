import styled from 'styled-components';

export default styled.div`
    margin-right: 10px;
    position: relative;
    height: 39px;
    width: ${props => (props.width ? props.width : '448px')};
    border: 4px solid rgb(71, 71, 107,0.3);
    border-radius: 3px;
`;
