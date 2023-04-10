import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;


grid-template-areas: 
"header"
"content"
"footer"
;

`

export const Content = styled.main`
    grid-area: content;

    width: 100%;
    height: 100vh;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

`


export const Info = styled.div`
    width: 380px;
    height: 120px;

    margin: 30px 0 60px;

    background: ${({theme}) => theme.COLORS.GRADIENT_2};

    display: flex;
    align-items: center;

    gap: 30px;

    border-radius: 3px;

    .ImageDiv{
        position: relative;
        width: 191px;
        height: 141px;

        img{
            position: absolute;

            left: -30px;
            top: -18px;
        }
    }
    
    .InfoText{
        font-family: 'Poppins';
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        
        h2{
            font-weight: 600;
            font-size: 18px;
        }
        p{
            font-weight: 400;
            font-size: 12px;
        }
    }
`