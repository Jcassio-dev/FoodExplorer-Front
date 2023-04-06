import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label{
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_400}
    }

    input{
        height: 48px;
        width: 100%;

        background: ${({theme}) => theme.COLORS.DARK_900};
        padding: 0 14px;
        border-radius: 8px;

        display: flex;
        align-items: center;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    input::placeholder{
        color: ${({theme}) => theme.COLORS.LIGHT_500}
    }

    input:focus{
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_400};
    }
`