import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import Product from './Product';

class MasonryStateless extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return true;
  }

  renderItems() {
    return this.props.arrItems.map((e) => (
      <Product
        key={e.src}
        src={e.src}
        content={e.content}
        distribution={e.distribution}
        date={e.date}
      />
    ));
  }

  render() {
    return (
      <div>
        <Masonry
          elementType={'ul'} // default 'div'
          options={{
            transitionDuration: 1000,
          }}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {this.renderItems()}
        </Masonry>
      </div>
    );
  }
}

MasonryStateless.propTypes = {
  arrItems: PropTypes.array,
};

export default MasonryStateless;
