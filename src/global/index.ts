// Bibliotecas Externas
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;

    @media only screen and (min-width: 320px) {
      font-size: 14px;
    }

    @media
    only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 320px),
    only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 320px),
    only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 320px),
    only screen and (        min-device-pixel-ratio: 2)      and (min-width: 320px),
    only screen and (                min-resolution: 192dpi) and (min-width: 320px),
    only screen and (                min-resolution: 2dppx)  and (min-width: 320px) {
      font-size: 16px;
    }

    @media
    only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 700px),
    only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 700px),
    only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 700px),
    only screen and (        min-device-pixel-ratio: 2)      and (min-width: 700px),
    only screen and (                min-resolution: 192dpi) and (min-width: 700px),
    only screen and (                min-resolution: 2dppx)  and (min-width: 700px) {
      font-size: 16px;
    }

    @media only screen and (min-width: 1300px) {
      font-size: 16px;
    }

    @media
    only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
    only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
    only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
    only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
    only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
    only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) {
      font-size: 16px;
    }
  }

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    font-size: 100%;
    font-weight: 400;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    outline: none;
  }

  textarea {
    height: 50px;
    font-size: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow:hidden;
    border: none;
    outline: none;
    resize: none;
  }

  button {
    cursor: pointer;
    user-select: none;
    outline: none;
    border: none;
    background-color: transparent;

    transition: filter 0.2s;

    label, p {
      cursor: pointer;
    }

    &:hover {
      filter: opacity(0.9);
    }

    &:disabled {
      cursor: not-allowed;
      filter: brightness(0.9);
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: filter 0.2s;

    label, p {
      cursor: pointer;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`
