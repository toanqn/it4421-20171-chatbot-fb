import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 280px;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    &:hover {
        border: solid 3px #0099FF;
        cursor: pointer;
    }
    margin: 10px;
`;

export const Image = styled.div`

`;

export const Cost = styled.div`
    text-align: center;
    background-color: #0099FF;
    height: 40px;
    font-family: sans-serif;
    font-size: 20px;
    margin-top: 5px;
    border-radius: 5px;
    color: white;
`;

export const Content = styled.div`
    font-size: 20px;
    font-family: sans-serif;
    border-bottom: solid 1px black;
    margin-bottom: 10px;
`;

export const Distribution = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #444444;
    font-family: sans-serif;  
`;

export const Date = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #444444;
    font-family: sans-serif;        
`;

