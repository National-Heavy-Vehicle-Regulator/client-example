import React from 'react';
import PageContainer from 'components/PageContainer/PageContainer';
import ContactsTable from './ContactsTable';

const Home: React.FC = () => {
  return (
    <PageContainer
      title="Performance Based Standards (PBS) - Useful contacts"
      unauthenticated={true}
    >
      <ContactsTable />
    </PageContainer>
  );
};

export default Home;
