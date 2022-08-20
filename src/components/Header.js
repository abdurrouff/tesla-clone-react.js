import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a href='#' key={index}>
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setIsSideBarOpen(true)} />
      </RightMenu>
      <BurgerNav show={isSideBarOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setIsSideBarOpen(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <a href='#'>{car}</a>
              </li>
            );
          })}
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'> Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in Inventory</a>
        </li>
        <li>
          <a href='#'> Cybertruck</a>
        </li>
        <li>
          <a href='#'>Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  gap: 10px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 10px;
  }
`;

const CustomMenu = styled(AiOutlineMenu)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: 0.3s linear;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose = styled(AiOutlineClose)`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
