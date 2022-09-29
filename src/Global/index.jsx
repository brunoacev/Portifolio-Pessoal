import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
        font-family: 'Poppins', sans-serif;
    }

    body {
        a, svg {
            transition: .4s ;
        }
        background: ${(props) => props.theme.bodyColor};

        /* display: flex;
        flex-wrap: wrap;
        padding: 3rem;
        gap: 3rem;
    } */
`;

export default Global;
