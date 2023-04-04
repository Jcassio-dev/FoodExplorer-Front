import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 32px 28px;
    background: ${({theme}) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 28px;

    grid-area: header;
`

export const Logo = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;

        h1{
            font-size: 21px;
            font-weight: 700;
            line-height: 25px;
        }

        img{
            height: 24px;
            width: 24px;
        }
    
`