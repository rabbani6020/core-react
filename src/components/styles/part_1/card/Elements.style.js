import styled from "styled-components";

export const PostCat = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  border-radius: 30px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  height: 36px;
  transition: all 0.5s ease;
  margin-bottom: 10px;
`;

export const PostTitle = styled.h3`
  margin-bottom: 10px;
`;

export const P = styled.p`
  font-weight: 500;
  letter-spacing: 0.05rem;
  line-height: 1.6;
`;
