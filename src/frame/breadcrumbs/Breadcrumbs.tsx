import React from 'react';
import styled from 'styled-components';

export interface IBreadCrumbEntry {
  name: string;
  path: string;
}

export interface IBreadcrumbsProps {
  breadcrumbs?: IBreadCrumbEntry[];
  onNavigate: (path: string) => void;
}

const Container = styled.div``;
const Breadcrumb = styled.span``;

export default function Breadcrumbs(props: IBreadcrumbsProps) {
  const { breadcrumbs = [], onNavigate } = props;
  if (breadcrumbs.length < 2) {
    return null;
  } else {
    return (
      <Container>
        {breadcrumbs.map((bc) => (
          <Breadcrumb onClick={() => onNavigate(bc.path)}>{bc.name}</Breadcrumb>
        ))}
      </Container>
    );
  }
}
