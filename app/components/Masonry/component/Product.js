import React, { PropTypes } from 'react';
import { Wrapper, Image, Content, Cost, Distribution, Date } from '../styled/Product';

class Product extends React.PureComponent {  // eslint-disable-line
  render() {
    return (
      <Wrapper>
        <Image>
          <img src={this.props.src} alt="" width="100%" />
        </Image>
        <Cost>
          Giá khởi điểm: 100.000vnd
        </Cost>
        <Content>
          { this.props.content }
        </Content>
        <Distribution>
          Nhà phân phối: {this.props.distribution}
        </Distribution>
        <Date>
          Ngày đấu giá: {this.props.date}
        </Date>
      </Wrapper>
    );
  }
}

Product.propTypes = {
  src: PropTypes.string,
  content: PropTypes.string,
  distribution: PropTypes.string,
  date: PropTypes.string,
};


export default Product;
