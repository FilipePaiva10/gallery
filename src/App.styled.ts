import styled from "styled-components";


export const Container = styled.div`
    background-color: ${props => props.theme.background.primary};
    color: ${props => props.theme.colors.primary};
    min-height: 100vh;
    padding: 10px;

    @media (max-width: 768px){
        &{
            padding: 20px;
        }
    }

`;


export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const HeaderArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

export const Header = styled.h1`
    text-align: center;
`;

export const UploadForm = styled.form`
    background-color: ${props => props.theme.background.secundary};
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Label = styled.label`


`;

export const Input = styled.input`

     &[type="file"]{
        outline: 0;
        border: 0;
        background-color: #756DF4;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        color: #FFF;
        transition: opacity ease .8s;
        width: 100%;
    }

    &[type="file"]::-webkit-file-upload-button{
        background-color: transparent;
        padding: 10px 20px;
        border-radius: 10px;
        outline: 0;
        border: 0;
        color: #FFF;
        cursor: pointer;
        width: 30%;
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
        margin: 0 10px;
        cursor: pointer;
        color: #FFF;
        transition: opacity ease .8s;
    }

    &[type="submit"]:hover{
        opacity: 0.8;
    }

    @media (max-width: 768px){
        &[type="file"]{
            width: 70%;
        }
    }

    @media (max-width: 424px){
        &[type="file"]{
            width: 72%;
            margin: 0;
        }
    }

`;

export const ScreenWarning = styled.div`


`;


export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap: 10px;

    @media (max-width: 425px){
        grid-template-columns: repeat(2 , 1fr);
    }

`;

