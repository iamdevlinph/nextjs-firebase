import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navbar } from '../../components';

const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyled>
      <Navbar />
      <div>{children}</div>
    </MainLayoutStyled>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const MainLayoutStyled = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  margin-top: 5px; /* for topbar */
  margin: 10px 20px;
`;
