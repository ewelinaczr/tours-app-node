import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Main colors */
  --color-brand-purple: #885DF5;
  --color-brand-green: #45CB85;

  /* Grey */
  --color-grey-0: #D4D4D4;
  --color-grey-1: #B4B4B4;
  --color-grey-2: #909090;
  --color-grey-3: #636363;
  --color-grey-4: #484848;
  --color-grey-5: #363636;

    /* Accent */
  --color-accent-red: #FF0035;
  --color-accent-orange: #F85A3E;

    /* Notification */
  --color-notification-success: #1BCE20;
  --color-notification-error: #FF4419;


  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
    /* 62.5% of 16px user agent font size is 10px */
  font-size: 62.5%;
}

body {
  font-family: "Inter", sans-serif;
  color: var(--color-grey-5);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  height: 3.6rem;
  color: var(--color-grey-3);
  border-color: transparent;
  font-weight: 500;
  border-width: 2px;
  border-radius: 4px;
  border-style: solid;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

input.checked {
  position: relative;
}

input.checked::before{
  content:"";
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: var(--color-brand-purple);
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-2);
  color: var(--color-grey-2);
}

input:focus,
/* button:focus, */
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-purple);
  outline-offset: -2px;
}





/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

h1{
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-grey-5)
}


h2{
  font-size: 3.2rem,;
  font-weight: 700;
  color: var(--color-grey-4)
}

h3{
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-grey-4)
}

h4{
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-grey-4)
}

h5{
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-3)
}

p{
font-size: 1.4rem;
color: var(--color-grey-2);
font-weight: 500;
}

img {
  max-width: 100%;

  /* For dark mode */
  /* filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); */
}
`;

export default GlobalStyles;
