import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #191920 no-repeat center top;
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, button, span, p, li {
        font: 14px Roboto, sans-serif
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }
`;
