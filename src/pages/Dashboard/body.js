import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components'

import shared from '../../styles/shared';

import Home from './Home/home';
import AddDelivery from './AddDelivery/addDelivery';
import Employees from './Employees/employees';
import Vehicles from './Vehicles/vehicles';

const DashboardBody = styled.div`
  flex-grow: 1;
  background: ${shared.colors.tertiary};
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
  padding: 3.2rem 1.6rem;
`;

const Dashboard = () => {
  return (
    <DashboardBody>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/add-delivery" component={AddDelivery}></Route>
        <Route path="/employees" component={Employees}></Route>
        <Route path="/vehicles" component={Vehicles}></Route>
        <Redirect to="/home"></Redirect>
      </Switch>
    </DashboardBody>
  );
}

export default Dashboard;