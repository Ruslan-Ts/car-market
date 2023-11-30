import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html {
	scroll-behavior: smooth;
	}
	body {
	font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;

		min-height: 100vh;
		font-size: 16px;
		font-style: normal;
		background-color: white;
		color: #3470FF;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	ul,
	ol {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}

	button {
		padding: 0;
		border: none;
		font: inherit;
		color: inherit;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

		[class="container"], [class$="main-container"] {
		width: 320px;
		padding: 0 20px;
		margin: 0 auto;
	}
	@media screen and (min-width: 768px) {
		[class="container"], [class$="main-container"] {
			width: 768px;
			padding: 0 32px;
		}
	}
	@media screen and (min-width: 1440px) {
		[class="container"], [class$="main-container"] {
			width: 1440px;
			padding: 0 112px;
		}
			}
	/* -----------------CSS MODAL----------------- */
	.ReactModal__Body--open {
    overflow: hidden;
}
.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 350ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}

.content {
  position: static;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

/* ----------------Loader CSS--------------- */
.LoaderWrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

}
.LoaderWrCon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* ---------------- Input arrow -------------- */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'],
input[type='number']:hover,
input[type='number']:focus {
  appearance: none;
  -moz-appearance: textfield;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.section-main-container {
  height: 100%;
}
`;
