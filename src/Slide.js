/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Slide = ({ content, width }) => (
  <div
    css={css`
      width: 100%;
      mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0)
      );
      z-index: -1;
      margin-bottom: -150px;
      background-size: 100% 100%;
      background-image: url("${content}");
    `}
  />
);

export default Slide;
