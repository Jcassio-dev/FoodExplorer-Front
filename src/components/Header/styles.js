import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    .mobile{
        width: 100%;
        padding: 32px 28px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: ${({theme}) => theme.COLORS.DARK_700};

        transition: ease 0.3s;
    }

    .MenuOn{
        justify-content: flex-start;
        gap: 16px;
        padding: 34px 28px;
    }

    .hidden{
        display: none;
    }

    .show{
        display: flex;
    }

`

export const IconButton = styled.button`
      font-size: 28px;
      background: none;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({theme}) => theme.COLORS.LIGHT_100}
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

export const Menu = styled.div`
    width: 100%;
    padding: 36px 28px;
    background: ${({theme}) => theme.COLORS.DARK_400};

    display: flex;
    flex-direction: column;
    gap: 36px;

    animation: slide-menu 0.3s backwards;

    ul{
        list-style: none;
    }

    li{
        font-family: 'poppins';
        font-size: 18px;
        font-weight: 300;

        padding: 10px;

        color: ${({theme}) => theme.COLORS.LIGHT_300};

        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000}
    }

`
export const Search = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background: ${({theme}) => theme.COLORS.DARK_900};

    border-radius: 5px;
    padding: 0 14px;

    svg{
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
    input{
        background: none;
        border: none;
    }
    input:focus{
        border: none;
    }
    input::placeholder{
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
`