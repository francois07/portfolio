import { css } from "styled-components"

const mixins = {
  neumorphicShadows: css`
    box-shadow: -6px -6px 16px rgba(17, 89, 255, 0.28),
      0px 6px 16px 6px rgba(0, 33, 108, 0.55);
  `,

  highlightPrimary: css`
    background: var(--primary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,

  highlightSecondary: css`
    background: var(--secondary);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,

  buttonPrimary: css`
    transition: box-shadow 0.1s ease-out;

    background: var(--primary);
    color: white;

    border: none;
    border-radius: 5rem;

    padding: 12px 30px;

    font-weight: bold;

    &:hover {
      filter: brightness(120%);
    }
  `,

  buttonSecondary: css`
    transition: box-shadow 0.1s ease-out;

    background: var(--secondary);
    color: white;

    border: none;
    border-radius: 5rem;

    padding: 12px 30px;

    font-weight: bold;

    &:hover {
      box-shadow: 0px 0px 15px #0094ff;
    }
  `,
}

export default mixins
