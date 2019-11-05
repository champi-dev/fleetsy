import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import HomeIcon from '../../assets/home';
import PeopleIcon from '../../assets/people';
import TruckIcon from '../../assets/truck';
import CubesIcon from '../../assets/cubes';
import IconButton from '../../components/iconButton';

import shared from '../../styles/shared';

const DashboardHeader = styled.div`
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
`;

const Dashboard = ({ user, location }) => {
  return (
    <DashboardHeader>
      <div className="header__top">
        <h1 className="top__title">{user.name}</h1>
        <img src={user.avatarUrl} className="top__avatar" alt="avatar" />
      </div>
      <div className="header__bottom">
        <Link to="/home">
          <IconButton className="bottom__icon" child={HomeIcon} isActive={location === '/home'}></IconButton>
        </Link>

        <Link to="/add-delivery">
          <IconButton className="bottom__icon" child={CubesIcon} isActive={location === '/add-delivery'}></IconButton>
        </Link>

        <Link to="/employees">
          <IconButton className="bottom__icon" child={PeopleIcon} isActive={location === '/employees'}></IconButton>
        </Link>

        <Link to="/vehicles">
          <IconButton className="bottom__icon" child={TruckIcon} isActive={location === '/vehicles'}></IconButton>
        </Link>
      </div>
    </DashboardHeader>
  );
}

export default Dashboard;