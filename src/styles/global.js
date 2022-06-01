import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
}
*:focus{
    outline: 0px;
}
html, body, #root {
    height: 100%;
}
body {
    background-color: #000;
}
body, input, button {
    font-family: 'Montserrat' , sans-serif;
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
}
button {
    cursor: pointer;
}
`