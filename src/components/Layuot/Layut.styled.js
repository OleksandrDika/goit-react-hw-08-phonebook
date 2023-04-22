import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  background-color: #f6eded;
  align-items: center;
  padding: 20px;
`;
export const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

export const Nav = styled.nav`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  gap: 20px;
  margin-left: 30px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
  margin-left: auto;
`;

export const UserButton = styled.button`
  width: 70px;
  height: 25px;
  margin-left: 20px;
  background-color: #2a6fbd;
  color: white;
`;
