import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    padding-bottom:50px
`;

const Title = styled.h1`
    font-weight:700; font-size:50px;
`;

const Content = styled.p`
    width:48%; line-height:1.4; padding-top:20px; font-size:20px;
`;

const PageIntro = ({ title, content }) => (
    <Container>
        <Title>{title}</Title>
        <Content>{content}</Content>
    </Container>
);

PageIntro.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default PageIntro;