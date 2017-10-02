import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    background-color:#373A47;
    padding-top: 46px;
    padding-left: 30px;
    padding-right: 30px;
`;

export const Items = styled.div`
    margin-top: 20px;
    margin-right: 20px;
    text-align: left;
    font-weight: 400;
    color: #87ABAD;
    font-size: 20px;
    font-family: Arial;
    &:hover {
        cursor: pointer;
        color: #00FFFF;
    }
`;
