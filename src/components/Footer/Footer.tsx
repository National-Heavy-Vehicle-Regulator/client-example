import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import {useStyles} from './Footer.styles';

const Footer: React.FC = () => {
  const classes = useStyles();
  const fullYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          <Link
            color="inherit"
            href="https://www.nhvr.gov.au/law-policies/privacy"
          >
            Privacy Policy
          </Link>{' '}
          {'Copyright © '}
          {fullYear}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
