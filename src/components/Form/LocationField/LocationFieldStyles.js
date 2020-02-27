import styled from 'styled-components';
import Button from '../../../UI-design-system/Button';

export const LocationInput = styled.input`
    width: 272px;
    height: 37px;
    font-size: 14px;
    padding-left: 10px;
    border: none;
    border-radius: 3px;
    &:hover {
        outline: none;
    }
`;

export const LocationListContainer = styled.div`
    background-color: white;
    font-size: 14px;
    border: 1px solid grey;
`;

export const Location = styled(Button)`
    margin: 0;
    padding: 8px;
    width: 281px;
    border-bottom: 0.5px solid grey;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    background-color: white;
    border-radius: 0px;
`;