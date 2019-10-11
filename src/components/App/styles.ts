import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  height: 100vh;

  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
`;

export interface ContentProps {
  isCentered: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ isCentered }) => (isCentered ? "50%" : "0")};
  transform: translateY(${({ isCentered }) => (isCentered ? "-50%" : "0")});
  bottom: ${({ isCentered }) => (isCentered ? "initial" : "0")};
  left: 0;
  right: 0;
  transition: all 0.5s ease-in-out;
  padding: 16px;
  overflow-y: auto;
`;

export const SearchBox = styled.div`
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1;

  input {
    width: 100%;
    padding: 20px 40px;
    font-size: inherit;
    font-family: inherit;
    max-width: 600px;
    border-radius: 40px;
    border: none;
    outline: none;
    color: #142139;

    box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
  }
`;

export const PostsList = styled.ul`
  flex: 1;
  width: 98%;
  max-width: 750px;
  padding: 16px 0;
  margin: 0 auto;

  li + li {
    margin-top: 16px;
  }
`;
