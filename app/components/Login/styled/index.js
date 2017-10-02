import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 400px;
    border: solid 2px #00CCCC;
    border-radius: 5px;
`;

export const Tab = styled.div`
    height: 50px;
    text-align: center;
    font-size: 20px;
    background-color : ${(props) => props.unSelect ? '#EEEEEE' : ''};
    &:hover {
        cursor: pointer;
    }
`;

export const SigninForm = styled.div`
    display: ${(props) => props.visible ? '' : 'none'};
    padding-left: 20px;
    padding-right: 20px;
    margin-top:50px;
`;

export const SigninButton = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const RegisterForm = styled.div`
    display: ${(props) => props.visible ? '' : 'none'};
    padding-left: 20px;
    padding-right: 20px;
    margin-top:50px;
`;

