import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../global_context/auth.context';

export interface IProfileImageProps {
  imageUri?: string;
  onClick?: () => void;
}

const Container = styled.div`
  height: 2rem;
  img {
    height: 100%;
    border-radius: 1rem;
  }
`;

export default function ProfileImage(props: IProfileImageProps) {
  const { onClick } = props;
  const authState = useContext(AuthContext);

  if (authState.state.state !== 'authenticated') {
    return null;
  }

  return (
    <Container onClick={onClick}>
      <img alt='profile' src={authState.state.user?.imageUrl} />
    </Container>
  );
}
