import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    body {padding-left:50px; font-family:Roboto; font-size:14px; color:#fff; background-color:rgba(20, 20, 20, 1)}
    * {margin:0; padding:0; box-sizing:border-box}
    a {text-decoration:none; color:inherit}
    ul li {list-style:none}
`;

export default globalStyles;