import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
    padding:30px 0 50px; font-weight:500; font-size:16px; color:#fff; text-align:center
`;
const Links = styled.div`
    ~ div {margin-top:20px}
    ul {display:inline-block}
    ul:after {content:""; display:block; clear:both}
    ul li {float:left; margin:0 15px}
`;
const Copy = styled.div`
    padding-top:25px;
    .logo {font-weight:500; letter-spacing:0.3em; font-size:14px; color:#fff; text-transform:uppercase}
    p {padding-top:25px; font-size:12px; color:rgba(255, 255, 255, .5)}
`;

const Footer = () => (
    <FooterContainer>
        <Links>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tv">TV Shows</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </Links>
        <Links>
            <ul>
                <li>Help</li>
                <li>Box Office Nomflix</li>
                <li>Nomflix Developer</li>
            </ul>
        </Links>
        <Copy>
            <span className="logo">Nomflix Official</span>
            <p>&copy; 2020-2021 by Nomfilx.net</p>
        </Copy>
    </FooterContainer>
);

export default Footer;