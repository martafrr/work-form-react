import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: inline;
`
export const KeywordInput = styled.input`
    height: 37px;
    width: 216px;
    border: none;
    font-size: 14px;
    padding-left: 10px;
    border-radius: 3px 0px 0px 3px;
    &:hover {
        outline: none;
    }
`;

export const CategoriesButton = styled.div`
    position: absolute;
    display: inline-block;  
    background-color: #f0f1f5;
    height: 39px;
    width: 221px;
    font-size: 14px;
    border-radius: 0px 3px 3px 0px;
`;

export const CategoriesWrapper = styled.div`
    margin-top: 3px;
    border: 4px solid rgb(71, 71, 107,0.3);
    border-radius: 3px;
    width: 448px;
    margin: 0;
`;

