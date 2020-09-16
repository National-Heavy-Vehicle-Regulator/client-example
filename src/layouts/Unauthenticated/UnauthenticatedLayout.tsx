import React from 'react';
import {useStyles} from './UnauthenticatedLayout.styles';

type UnauthenticatedProps = {
  children: React.ReactChildren | React.ReactElement | React.ReactNode;
};

const UnauthenticatedLayout: React.FC<UnauthenticatedProps> = (
  props: UnauthenticatedProps,
) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      @TODO missing header component
      <main className={classes.layout}>{props.children}</main>
      @TODO missing footer component
    </div>
  );
};

export default UnauthenticatedLayout;
