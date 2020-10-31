import React from 'react';
import styled from 'styled-components';

export interface IPageHeadingProps {
  children?: React.ReactNode;
}

const StyledHeading = styled.h2`
  text-align: center;
  font-weight: 400;
  margin: 0;
  font-size: ${(props) => props.theme.typography.pageHeadingSize};
`;

export default function PageHeading(props: IPageHeadingProps) {
  const { children } = props;
  return <StyledHeading>{children}</StyledHeading>;
}
