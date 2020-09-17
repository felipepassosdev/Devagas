import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <nav>
        <span>Devagas</span>
      </nav>
      <ul>
        <Link to="/Frontend"><li>Frontend</li></Link>
        <Link to="/Backend"><li>Backend</li></Link>
        <Link to="/Mobile"><li>Mobile</li></Link>
        <Link to="/Design"><li>Design</li></Link>
      </ul>
    </Container>
  );
}

export default Header;