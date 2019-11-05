import React from 'react';
import styled from 'styled-components'

import mockData from '../../utils/mockData';

import Header from './header';
import Body from './body';

const { user } = mockData;

const DashboardPage = styled.div`
  &.dashboard {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const Dashboard = ({ location }) => {
  return (
    <DashboardPage className="dashboard">
      <Header user={user} location={location.pathname}></Header>
      <Body></Body>
    </DashboardPage>
  );
}

export default Dashboard;