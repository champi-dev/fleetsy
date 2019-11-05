import React from 'react';
import styled from 'styled-components';

import shared from '../../../styles/shared'

const HomePage = styled.div`
  &.home {
    display: flex;
    flex-direction: column;

    .home__title {
      color: ${shared.colors.text_bold};
      font-weight: ${shared.font.mediumWeight};
      margin-bottom: 1.6rem;
    }

    .home__table {
      background: ${shared.colors.secondary};
      border: none;
      border-radius: 0.8rem;

      thead {
        background: ${shared.colors.secondary};
      }

      th, td {
        border-radius: 0.8rem;
        border: none;
      }

      th {
        color: ${shared.colors.text_bold};
      }

      td {
        color: ${shared.colors.text_medium};
      }
    }
  }
`;

const Home = () => (
  <HomePage className="home">
    <h2 className="home__title">Monitoring</h2>

    <table className="home__table pure-table">
      <thead>
        <tr>
          <th>Driver</th>
          <th>Addresses</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Honda</td>
          <td>Accord</td>
          <td>2009</td>
        </tr>

        <tr>
          <td>Toyota</td>
          <td>Camry</td>
          <td>2012</td>
        </tr>

        <tr>
          <td>Hyundai</td>
          <td>Elantra</td>
          <td>2010</td>
        </tr>
      </tbody>
    </table>
  </HomePage>
);

export default Home