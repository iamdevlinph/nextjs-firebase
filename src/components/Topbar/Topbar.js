import React from 'react';
import styled from 'styled-components';
import { COLOR_CONS } from '../../constants';

export default () => <TopBar id="topbar" />;

const TopBar = styled.div`
  border-top: 5px solid ${COLOR_CONS.red};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;
