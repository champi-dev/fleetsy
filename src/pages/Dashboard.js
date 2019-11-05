import React from 'react';
import styled from 'styled-components'

import HomeIcon from '../assets/home';
import PeopleIcon from '../assets/people';
import TruckIcon from '../assets/truck';
import CubesIcon from '../assets/cubes';
import IconButton from '../components/IconButton';

import shared from '../styles/shared';
import mockData from '../utils/mockData';

const { user } = mockData;

const DashboardPage = styled.div`
  &.dashboard {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;    

    .dashboard__header {
      display: flex;
      flex-direction: column;
      height: 12rem;
      padding: 1.6rem;

      .header__top {
        display: flex;
        align-items: center;

        .top__title {
          color: ${shared.colors.text_bold};
        }

        .top__avatar {
          width: 5rem;
          height: 5rem;
          object-fit: contain;
          margin-left: auto;
        }
      }  
      
      .header__bottom {
        flex-grow: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        .bottom__icon {
          margin: 0 0.8rem;
        }
      }
    }

    .dashboard__body {
      flex-grow: 1;
      background: ${shared.colors.tertiary};
      border-top-left-radius: 5rem;
      border-top-right-radius: 5rem;
      padding: 3.2rem 1.6rem;
    }
  }
`;

const Dashboard = () => {
  return (
    <DashboardPage className="dashboard">
      <div className="dashboard__header">
        <div className="header__top">
          <h1 className="top__title">{user.name}</h1>
          <img src={user.avatarUrl} className="top__avatar" alt="avatar" />
        </div>
        <div className="header__bottom">
          <IconButton className="bottom__icon" child={HomeIcon}></IconButton>
          <IconButton className="bottom__icon" child={CubesIcon}></IconButton>
          <IconButton className="bottom__icon" child={PeopleIcon}></IconButton>
          <IconButton className="bottom__icon" child={TruckIcon}></IconButton>
        </div>
      </div>

      <div className="dashboard__body">
        the body
      </div>
    </DashboardPage>
  );
}

export default Dashboard;