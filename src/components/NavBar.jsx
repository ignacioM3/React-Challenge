import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <Header>
        <Link to="/">
          <img src="/images/logo.png" alt="" />
        </Link>
      </Header>
  )
}

const Header = styled.header`
  text-align: center;
  img{
    width: 200px;
  }

`

export default NavBar