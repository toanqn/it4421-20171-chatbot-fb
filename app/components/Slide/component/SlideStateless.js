import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  pauseOnHover: true,
};

class SlideStateless extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Slider {...settings}>
        {
          this.props.arrHotProducts.map((e) => (
            <div>
              <img src={e} alt="" height="400px" width="100%" />
            </div>
          ))
        }
      </Slider>
    );
  }
}

SlideStateless.propTypes = {
  arrHotProducts: PropTypes.array,
};

export default SlideStateless;
