import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './PageContainer.styles';

type PageContainerProps = {
  children?: React.ReactChildren | React.ReactElement | React.ReactNode;
  title: string | React.ReactElement | React.ReactNode;
  unauthenticated?: boolean;
};

const PageContainer: React.FC<PageContainerProps> = (
  props: PageContainerProps,
) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={props.unauthenticated ? classes.unAuthPage : classes.authPage}
    >
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          {props.title}
        </Typography>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default PageContainer;
