import styled from "styled-components";
import randomColor from "randomcolor";

export const Card = styled.section<ColoredCardProps>`
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 10px 6px -10px rgba(0, 0, 0, 0.1);
`;

export interface ColoredCardProps {
  colorSeed: string;
}

export const ColoredCard = styled(Card).attrs((props: ColoredCardProps) => ({
  style: {
    background: randomColor({
      luminosity: "bright",
      seed: props.colorSeed,
      format: "hsla",
      alpha: 0.2
    })
  }
}))``;
