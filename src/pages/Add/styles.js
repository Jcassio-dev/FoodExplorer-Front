import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    grid-template-rows: '100px 1fr';
    grid-template-areas: 
    "header"
    "content"
    ;

`

export const Content = styled.main`
    grid-area: content;
    
    width: 100%;

    padding: 11px 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Form = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;

    .inputWrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 16px;

        > span, label{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;

            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

    }
    .food{

        > label {
            height: 55px;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: start;

            cursor: pointer;

            background: ${({theme}) => theme.COLORS.DARK_800};

            border-radius: 5px;
            padding: 12px 32px;

            svg {
                width: 24px;
                height: 24px;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                margin-right: 8px;
            }

            span {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;

                white-space: nowrap;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }

            input {
                display: none;
            }
    }

    }
`