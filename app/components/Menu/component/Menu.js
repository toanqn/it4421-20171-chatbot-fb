import React from 'react';
import TabletIcon from 'react-icons/lib/ti/device-tablet';
import BeerIcon from 'react-icons/lib/ti/beer';
import LaptopIcon from 'react-icons/lib/ti/device-laptop';
import HeadPhoneIcon from 'react-icons/lib/ti/headphones';
import { Wrapper, Items } from '../styled';

class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Items>
          <TabletIcon /> Smarthphone, Tablet
        </Items>
        <Items>
          <LaptopIcon /> Laptop
        </Items>
        <Items>
          <HeadPhoneIcon /> Tai nghe
        </Items>
        <Items>
          <BeerIcon /> Hàng tiêu dùng
        </Items>
      </Wrapper>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
