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

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 24px;
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

    margin-left: 24px;

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

export const Section = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    text-align: left;

    gap: 24px;

    padding-left: 24px;

    h1{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 18px;

        color: ${({theme}) => theme.COLORS.LIGHT_300}
    }


`