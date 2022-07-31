import styled, { css } from "styled-components";

const VARIANTS = {
  edge: css`
    --button-radius: 0px;
    --button-border: 2px solid #000;
    --button-bg-color: #fff;

    &:hover {
      --button-hover-bg-color: none;
    }
  `,

  grayblue: css`
    --button-bg-color: #698392;
    --button-color: #fff;
    --button-padding: 16px 12px;
    --button-font-size: 15px;

    &:hover {
      --button-hover-bg-color: #637c89;
    }
  `,
};

export default function Button({ variants, children }) {
  const variantStyle = VARIANTS[variants];

  return <BasicButton variantStyle={variantStyle}>{children}</BasicButton>;
}

let BasicButton = styled.button`
  ${(p) => p.variantStyle}

  width: 100%;

  border-radius: var(--button-radius, 5px);
  border: var(--button-border, none);
  font-size: var(--button-font-size, 13px);
  color: var(--button-color, #495057);
  background-color: var(--button-bg-color, #f1f3f5);
  padding: var(--button-padding, 11px 12px);

  &:hover {
    background-color: var(--button-hover-bg-color, #e9ecef);
    cursor: pointer;
  }
`;
