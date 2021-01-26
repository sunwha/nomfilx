import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import movieImg from "assets/clapperboard.svg";
import tvImg from "assets/tv.svg";
import searchImg from "assets/loupe.svg";

const Header = styled.header`
position:fixed; top:0; bottom:0; left:0; z-index:500; width:50px; text-align:center; background:rgba(0, 0, 0, .8); box-shadow:1px 0 5px rgba(255, 255, 255, .05)
`;

const List = styled.ul`
display:inline-block; position:relative; top:50%; transform:translateY(-50%);
`;

const Item = styled.li`
position:relative; width:36px; height:36px; line-height:36px; font-size:0; color:#fff; border-radius:100%; 
background:rgba(255, 255, 255, ${props => props.current ? "1" : ".7"});
&:hover {background:rgba(255, 255, 255, 1)}
a {
    &:after {content:""; position:absolute; top:0; right:0; bottom:0; left:0; z-index:0; background-size:22px; background-repeat:no-repeat; background-position:50% 50%}
}
&:first-child {
    a:after {background-image:url(${movieImg})}
}
&:nth-child(2) {
    a:after {background-image:url(${tvImg})}
}
&:nth-child(3) {
    a:after {background-image:url(${searchImg})}
}
~ {
    li {margin-top:50px}
}
`;

const $Link = styled(Link)`
display:block
&:focus {color:inherit}
`;

export default withRouter(({location: { pathname }}) => (
    <Header className="nav">
        <List>
            <Item current={pathname === "/"}><$Link to="/">Movies</$Link></Item>
            <Item current={pathname === "/tv"}><$Link to="/tv">TV</$Link></Item>
            <Item current={pathname === "/search"}><$Link to="/search">Search</$Link></Item>
        </List>
    </Header>
));