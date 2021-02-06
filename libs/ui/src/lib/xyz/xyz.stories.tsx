import React from 'react';
import { Xyz, XyzProps } from './xyz';

export default {
  component: Xyz,
  title: 'Xyz',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: XyzProps = {};

  return <Xyz />;
};
