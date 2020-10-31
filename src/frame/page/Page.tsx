import React from 'react';
import styled from 'styled-components';
import PageHeading from '../../components/page_heading/PageHeading';
import Breadcrumbs, { IBreadCrumbEntry } from '../breadcrumbs/Breadcrumbs';
import { useHistory } from 'react-router-dom';
import Icon from '../../components/icon/Icon';

export interface IPageProps {
  children: React.ReactNode;
  heading: string;
  breadcrumbs?: IBreadCrumbEntry[];
}

const StyledPage = styled.div``;
const HeadingContainer = styled.div``;

export default function Page(props: IPageProps) {
  const { children, heading, breadcrumbs = [] } = props;
  const history = useHistory();
  return (
    <StyledPage>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        onNavigate={(path) => history.push(path)}
      />
      <HeadingContainer>
        {breadcrumbs.length > 0 && (
          <Icon
            onClick={() =>
              history.push(breadcrumbs[breadcrumbs.length - 1].path)
            }
            type='chevron-left'
          />
        )}
        <PageHeading>{heading}</PageHeading>
      </HeadingContainer>
      {children}
    </StyledPage>
  );
}
