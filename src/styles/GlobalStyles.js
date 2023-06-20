import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
      /* colors */
      --primary: #7695EC;
      --primary-disabled: #B3C7F9;
      --primary-hover: #5F7EEC;
      --text: #000000;
      --text-white: #FFFFFF;
      --red-cancel: #FF5151;
      --red-cancel-hover: #FF6B6B;
      --green-confirm: #47B960;
      --green-confirm-hover: #5CC772;
      --background: #FFFFFF;
      --background-page: #DDDDDD;
      --grey: #CCCCCC;
      --light-gray: #999999;
      --mid-gray: #777777;

      /* fonts */
      --font-primary: 'Roboto', sans-serif;

      /* sizes */
      --size-sm: clamp(0.75rem, 1.5vw, 1rem);
      --size-md: clamp(1rem, 1.5vw, 1.25rem);
      --size-lg: clamp(1.25rem, 1.5vw, 1.5rem);

      /* border-radius */
      --border-radius: 1rem;
      --input-border-radius: 0.5rem;

      --header-height: 5rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
  }

  html {
    font-size: 16px;
    background-color: var(--background-page);
  }

  body {
    h1 {
      font-size: var(--size-lg);
      font-weight: 700;
      line-height: 25.78px;
    }

    h2 {
      font-size: var(--size-md);
      font-weight: 700;
      line-height: 21.09px;
    }

    label {
      font-size: var(--size-sm);
      font-weight: 400;
      line-height: 18.75px;
      margin-bottom: 0.5rem;
    }

    input::placeholder,
    textarea::placeholder {
      color: var(--grey);
    }

    p {
      font-size: var(--size-md);
      font-weight: 400;
      line-height: 21.09px;
    }

    button {
      cursor: pointer;
    }

    .input-area {
      display: flex;
      flex-direction: column;
    }
  }
`;
