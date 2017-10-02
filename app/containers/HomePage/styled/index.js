import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    font-size: 30px;
    &:hover {
        cursor: pointer;
    };
    display: ${(props) => props.invisible ? 'none' : ''};
`;

export const SlideWrapper = styled.div`
    overflow-x: hidden;
    height: 450px;
`;

