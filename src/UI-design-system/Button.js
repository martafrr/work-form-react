import styled from 'styled-components';

export default styled.button`
    padding: 8px 19px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    font-size: 14px;
    height: 42px;
    width: 91px;
    background-color: ${props => (props.bgColor ? props.bgColor : 'rgb(245, 249, 0)')};
    margin-top: ${props => (props.marginTop ? props.marginTop : '')}
`;