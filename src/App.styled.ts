import styled from "styled-components";


export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`;


export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;


export const Header = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`;

export const UploadForm = styled.form`
    background-color: #3d3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
`;

export const Label = styled.label`


`;

export const Input = styled.input`
     &[type="file"]{
        outline: 0;
        border: 0;
        background-color: #756DF4;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        color: #FFF;
        transition: opacity ease .8s;
    }

    &[type="file"]:hover{
        opacity: 0.8;
    }



    &[type="submit"]{
        outline: 0;
        border: 0;
        background-color: #756DF4;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        color: #FFF;
        transition: opacity ease .8s;
    }

    &[type="submit"]:hover{
        opacity: 0.8;
    }

`;

export const ScreenWarning = styled.div`


`;


export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 10px;
`;

