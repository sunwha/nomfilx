import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
position:fixed; top:0; bottom:0; left:0; width:50px; text-align:center; background:rgba(0, 0, 0, .8);
`;

const List = styled.ul`
display:inline-block; position:relative; top:50%; transform:translateY(-50%);
`;

const Item = styled.li`
width:36px; height:36px; line-height:36px; font-size:10px; color:#fff; background:rgba(255, 255, 255, .2);
~ {
    li {margin-top:50px}
}
border-bottom:3px solid ${props => props.current ? "red" : ""};
&:hover{background:rgba(255, 255, 255, .4)}
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