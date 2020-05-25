import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

import {
  COLOR_MAIN_LIGHT,
  LAYOUT,
} from '../constants';

import Button from './Button';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${COLOR_MAIN_LIGHT};
`;

const HeaderContent = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: ${LAYOUT.desktop.maxWidth}px;
  padding: ${LAYOUT.desktop.spacing}px;
  display: flex;
  justify-content: space-between;
`;

const HeaderRight = styled.div`
  display: flex;
  margin-right: -12px;

  & > * {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const HeaderNav = styled.nav`
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    display: block;
    padding: 15px ${LAYOUT.desktop.spacing / 2}px;
    font-size: 1.25rem;
    color: #fff;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Logo height="50px" />

      <HeaderRight>
        <HeaderNav>
          <li>
            <a href="/">
              Contact us
            </a>
          </li>
        </HeaderNav>

        <Button>
          Try it free
        </Button>

        <Button buttonStyle="outline">
          Try it free
        </Button>
      </HeaderRight>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
