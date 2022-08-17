import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online For Touchless Delivery'
        background='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order Online For Touchless Delivery'
        background='model-y.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order Online For Touchless Delivery'
        background='model-3.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order Online For Touchless Delivery'
        background='model-x.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        background='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof costs Less Than a Roof Plus Solar Panels'
        background='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Accessories'
        description=''
        background='accessories.jpg'
        leftBtnText='Shop now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
