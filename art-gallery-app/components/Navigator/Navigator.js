import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Navigator() {
  return (
    <StyledNav>
      <StyledLink replace href="/">Spotlight</StyledLink>
      <StyledLink replace href="/gallery">Gallery</StyledLink>
      <StyledLink replace href="/favourites">Favourites</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: hsl(0, 4%, 96%);
  border-top: 1px solid hsl(0, 2%, 90%);
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  border-left: 1px solid hsl(0, 2%, 90%);
`;
