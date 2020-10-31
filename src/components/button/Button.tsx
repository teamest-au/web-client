import React from 'react';
import styled from 'styled-components';

export interface IButtonProps {
  children: React.ReactNode;
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colours.buttonColour};
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem;
`;

export default function Button(props: IButtonProps) {
  const { children, onClick } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
