import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 12px 0;
    
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};

    border-radius: 5px;

    font-size: 14px;
    line-height: 24px;
    font-family: 'Poppins';
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_100}

`

