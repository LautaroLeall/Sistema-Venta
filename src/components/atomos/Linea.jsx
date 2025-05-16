import styled from "styled-components";

export const Linea = styled.div`
    background-color: ${({theme}) => theme.color2};
    height: 2px;
    border-radius: 15px;
    margin: 20px 0;
    position: relative;
    text-align: center;
    span{
        top: -15px;
        position: absolute;
        background-color: ${({theme})=>theme.bgtotal};
        color: ${({theme}) => theme.color2};
        padding: 0 5px;
        text-align: center;
        font-weight: 700;
    }
`