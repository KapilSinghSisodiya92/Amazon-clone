/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const SliderContent = (props) => (
  <div
    css={css`
      transform: translateX(-${props.translate}px) !important;
      transition: transform ease-out ${props.transition}s !important;
      height: 100%;
      width: ${props.width}px;
      display: flex;
      cursor: pointer;
    `}
  >
    {props.children}
  </div>
);

export default SliderContent;
