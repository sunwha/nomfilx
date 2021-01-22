import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100vw; height:100vh; display:flex; justify-content:center; text-align:center;
    span {margin-top:200px; font-size:30px; vertical-align:middle}
`;

export default () => <Container><span role="img" aria-label="loading">⏰</span></Container>