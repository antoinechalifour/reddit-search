import styled from "styled-components";

export interface FlexLayoutProps {
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
}

export const FlexLayout = styled.div<FlexLayoutProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "flex-start"};
`;

export interface BoxProps {
  flex?: string;
  padding?: number;
}

export const Box = styled.div<BoxProps>`
  flex: ${({ flex }) => flex || 0};
  padding: ${({ padding = 0 }) => padding * 5}px;
  overflow: hidden;
`;
