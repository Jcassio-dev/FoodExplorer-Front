import styled from "styled-components";

export const Container = styled.div`
    width: 230px;

    padding: 24px;

    background: ${({theme}) => theme.COLORS.DARK_200};

    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;

    position: relative;




    img{
        width: 88px;
        height: 88px;
    }

    h1{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;

        color: ${({theme}) => theme.COLORS.LIGHT_300};

        display: flex;
        align-items: center;
    }

    h2{
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        text-align: center;

        color: ${({theme}) => theme.COLORS.CAKE_200};
    }

    div{
        display: flex;
        align-items: center;
        gap: 18px;

        font-family: 'Roboto';
        font-size: 16px;
        line-height: 100%;

        color: ${({theme})=> theme.COLORS.LIGHT_300};

        button{
            background: none;
            border: none;

            display: grid;
            place-content: center;

            color: ${({theme})=> theme.COLORS.LIGHT_300};
            font-size: 20px;
        }
    }

    button{
        padding: 4px 0;
    }


`

