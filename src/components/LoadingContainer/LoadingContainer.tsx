import React from 'react';
import PageContainer from 'components/PageContainer/PageContainer';

type LoadingContainerProps = {
  unauthenticated?: boolean;
};
const Home: React.FC<LoadingContainerProps> = (
  props: LoadingContainerProps,
) => <PageContainer title="Loading..." {...props} />;

export default Home;
