import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  COLOR_MAIN_PURPLE,
  LAYOUT,
} from '../constants';

const StyledButton = styled.button`
  background-color: ${COLOR_MAIN_PURPLE};
  padding: 15px ${LAYOUT.desktop.spacing / 2}px;
  min-width: 120px;
  box-sizing: border-box;
  border: none;
  text-align: center;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 300;
  border: solid 1px transparent;
  border-radius: 4px;

  ${(props) => props.buttonStyle === 'outline' && `
    background: transparent;
    color: ${COLOR_MAIN_PURPLE};
    border-color: ${COLOR_MAIN_PURPLE};
  `}
`;

const Header = ({
  children,
  buttonStyle = 'normal',
}) => (
  <StyledButton buttonStyle={buttonStyle}>
    {children}
  </StyledButton>
);

export default Header;

Header.propTypes = {
  children: PropTypes.node,
  buttonStyle: PropTypes.oneOf(['normal', 'outline']),
};
