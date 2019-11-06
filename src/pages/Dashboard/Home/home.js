import React from 'react';
import styled from 'styled-components';

import StatusBadge from '../../../components/statusBadge';

import shared from '../../../styles/shared';
import mockData from '../../../utils/mockData';
import { deliveryStatus } from '../../../utils/enums';

const HomePage = styled.div`
  &.home {
    display: flex;
    flex-direction: column;

    .home__title {
      color: ${shared.colors.text_bold};
      font-weight: ${shared.font.mediumWeight};
      margin-bottom: 1.6rem;
    }

    .home__table-wrapper {
      overflow-x: auto;
      border-radius: 0.8rem;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
    }

    .home__table {
      width: 100%;
      background: ${shared.colors.secondary};      
      border: none;
      border-radius: 0.8rem;

      thead {
        background: ${shared.colors.secondary};
        border-bottom: 0.1rem solid rgba(0,0,0,0.1);
      }

      th, td {
        border-radius: 0.8rem;
        border: none;
      }

      th {
        color: ${shared.colors.text_medium};
        font-weight: ${shared.font.mediumWeight};
      }

      td {
        color: ${shared.colors.text_bold};

        span {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }             

        &.long {
          min-width: 13.6rem;
        }
      }
    }
  }
`;

const Home = () => (
  <HomePage className="home">
    <h2 className="home__title">Monitoring</h2>

    <div className="home__table-wrapper">
      <table className="home__table pure-table">
        <thead>
          <tr>
            <th>Driver</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(mockData.deliveries).map((delivery) => <tr key={delivery.id}>
            <td>{mockData.drivers[delivery.driver_id].name}</td>
            <td className="long">{delivery.origin_address}</td>
            <td className="long">{delivery.destination_address}</td>
            <td><StatusBadge status={delivery.status}></StatusBadge></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </HomePage>
);

export default Home