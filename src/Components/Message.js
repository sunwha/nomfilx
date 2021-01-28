import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    display:flex; width:100%; height:50vh; justify-content:center;
`;

const Text = styled.span`
    color:${props => props.color}; vertical-align:middle
`;

const Error = ({ text, color }) => (
    <Container>
        <Text color={color}>{text}</Text>
    </Container>
);

Error.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Error;