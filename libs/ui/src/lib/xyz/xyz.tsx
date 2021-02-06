import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface XyzProps {}

const StyledXyz = styled.div`
  color: blue;
`;

export function Xyz(props: XyzProps) {
  return (
    <StyledXyz>
      <h1>Welcome to xyz!</h1>
    </StyledXyz>
  );
}

export default Xyz;
