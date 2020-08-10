/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LogoSrc from './logo.svg';

const LogoWrapper = styled.div`
    width: auto;
    max-width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
`;

const LogoImage = styled.img`
    width: auto;
    height: 100%;
`;

const Logo = ({
  width,
  height,
}) => (
  <LogoWrapper
    width={width}
    height={height}
  >
    <LogoImage
      src={LogoSrc}
      alt="Bookify logo"
    />
  </LogoWrapper>
);

export default Logo;

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
