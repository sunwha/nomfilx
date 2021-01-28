import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    width:100vw; height:100vh; text-align:center;
`;
const LoadFrame = keyframes`
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
`;
const Load = styled.div`
    display: inline-block;
    position: relative;
    margin-top:200px;
    width: 20px;
    height: 20px;
    &:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${LoadFrame} 1.2s infinite;
    }
`;

export default () => <Container><Load role="img" aria-label="loading"><div></div><div></div></Load></Container>