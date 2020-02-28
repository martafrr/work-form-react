import React from 'react';
import styled from 'styled-components';
import SearchWorkForm from '../SearchWorkForm/index';
import backgroundImg from '../../../assets/xing.png';
import H2 from '../../../UI-design-system/H2';

const FormWrapperDiv = styled.div`
    margin: 40px auto;
    width: 984px;
    height: 400px;
    background-image: url(${backgroundImg});
`;

const FormContainer = styled.div`
    background-color:rgb(6, 134, 140, .6);
    height: 100%;
    width: 100%;
`;

const FormWrapper = () => (
    <FormWrapperDiv data-test="form-wrapper">
        <FormContainer>
            <H2 firstLine={true}>For a better working life</H2>
            <H2 firstLine={false}>The new XING Jobs</H2>

            <SearchWorkForm />
        </FormContainer>
    </FormWrapperDiv>
);

export default FormWrapper;
