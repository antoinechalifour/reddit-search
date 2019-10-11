import styled from "styled-components";

import noPreviewImage from "./no-preview.png";

export const Title = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Information = styled.p`
  opacity: 0.75;

  a {
    color: inherit;
  }

  * + * {
    margin-left: 8px;
  }
`;

export interface PreviewProps {
  url: string;
}

export const Preview = styled.div<PreviewProps>`
  width: 80px;
  height: 90px;
  background: rgba(0, 0, 0, .2);
  background-image: url("${({ url }) => url}"),
    url("${noPreviewImage}");
  background-size: cover;
  background-position: center;

  @media (min-width: 900px) {
  width: 120px;
  height: 100px;
  }
`;
