import styled from "styled-components";

export interface TextProps {
  size?: number;
  weight?: "bold" | "normal";
  color?: string;
}

const DESKTOP_SIZES = [1.208, 1.6, 2, 2.5, 3.125, 3.906, 4.883];
const MOBILE_SIZES = [0.8, 1, 1.25, 1.563, 1.953, 2.441, 3.052];

export const Text = styled.span<TextProps>`
  font-size: ${({ size = 1 }) => MOBILE_SIZES[size]}rem;
  font-weight: ${({ weight = "normal " }) => weight};
  color: ${({ color = "#373737" }) => color};

  @media (min-width: 900px) {
    font-size: ${({ size = 1 }) => DESKTOP_SIZES[size]}rem;
  }
`;
