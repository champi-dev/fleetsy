import React from 'react';
import styled from 'styled-components'

import shared from '../styles/shared';
import { deliveryStatus } from '../utils/enums'

const BadgeComponent = styled.div`
  padding: 0.5rem;
  border-radius: 0.8rem;

  span {
    display: block;
    text-align: center;
  }
`;

const badgeColor = (status) => {
  switch (status) {
    case deliveryStatus.completed:
      return {
        background: shared.colors.green,
        color: shared.colors.green_dark
      };
    case deliveryStatus.pending:
      return {
        background: shared.colors.grey,
        color: shared.colors.grey_dark
      };
    case deliveryStatus.onTrack:
      return {
        background: shared.colors.orange,
        color: shared.colors.orange_dark
      };
    default:
      return;
  }
};

const StatusBadge = ({ status }) => (
  <BadgeComponent style={{
    background: badgeColor(status).background
  }}>
    <span style={{
      color: badgeColor(status).color
    }}>{status}</span>
  </BadgeComponent>
);

export default StatusBadge;