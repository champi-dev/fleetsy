import React from 'react';
import styled from 'styled-components'

import shared from '../styles/shared';

const IconBtnComponent = styled.button`
  width: 4rem;
  height: 4rem;
  border: unset;
  background: unset;
  transition: background 200ms ease-in-out;
  border-radius: 0.8rem;
`;

const IconButton = ({ child, isActive, className }) => {

  return (
    <IconBtnComponent className={className} style={{
      background: isActive ? shared.colors.primary : shared.colors.secondary
    }}>
      {child({ fill: isActive ? shared.colors.secondary : shared.colors.text_medium })}
    </IconBtnComponent>
  );
};

export default IconButton;