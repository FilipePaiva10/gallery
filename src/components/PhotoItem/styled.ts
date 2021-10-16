import styled from "styled-components";


export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow:0 5px 15px 0 rgba(0,0,0,0.3);
    opacity: 0.8;

    &:hover{
        transform: scale(1.15,1.15);
        cursor: pointer;
        opacity: 1;
    }

`;

export const IconArea = styled.div`
    text-align: right;
    border-radius: 50%;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;

    svg{
        cursor: pointer;
        box-shadow:0 5px 15px 0 rgba(0,0,0,0.3);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    svg:hover{
        
    }
`;

export const DownloadArea = styled.a`
    text-decoration: none;
    color: #FFF;

`;

export const Image = styled.img`
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
`;


export const Title = styled.label`
    text-align: center;
    display: block;
`;