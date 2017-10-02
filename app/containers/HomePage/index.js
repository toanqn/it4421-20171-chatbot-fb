import React from 'react';
import { push as MenuBurger } from 'react-burger-menu';
import MenuIcon from 'react-icons/lib/ti/th-menu';
import { LoginStateless } from '../../components/Login';
import { SlideStateless } from '../../components/Slide';
import { MasonryStateless } from '../../components/Masonry';
import Product from '../../components/Masonry/component/Product';
import Menu from '../../components/Menu';
import { MenuWrapper, SlideWrapper } from './styled';

const arrHotProducts = [
  'http://static1.bigstockphoto.com/thumbs/1/2/8/large1500/82188509.jpg',
  'https://image.shutterstock.com/z/stock-photo-eat-well-live-well-healthy-food-party-restaurant-concept-408225955.jpg',
  'https://3apq7g38q3kw2yn3fx4bojii-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/71X3kCt5TnL.jpg',
];

const arrItems = [
  {
    src: 'http://cafefcdn.com/zoom/260_162/2016/stevejobs1-1465357062299-1465358775185.jpg',
    content: "Hello everybody, this is demo of masonry react, let 's enjoy it together",
    distribution: 'FPT',
    date: '8h 20/10/2017',
  },
  {
    src: 'http://photoservice.goplay.vn/Resources/Upload/Images/Editor/big-sale.jpg',
    content: "Hello everybody, this is demo of masonry react, let 's enjoy it together",
    distribution: 'FPT',
    date: '8h 20/10/2017',
  },
  {
    src: 'https://pbs.twimg.com/media/DAM4RqyW0AQPkhL.jpg',
    content: "Hello everybody, this is demo of masonry react, let 's enjoy it together",
    distribution: 'FPT',
    date: '8h 20/10/2017',
  },
  {
    src: 'http://freedesignfile.com/upload/2017/03/Beautiful-girl-hand-holding-red-flowers-Stock-Photo.jpg',
    content: "Hello everybody, this is demo of masonry react, let 's enjoy it together",
    distribution: 'FPT',
    date: '8h 20/10/2017',
  },
  {
    src: 'http://truyenhinhsohd.com.vn/NewsImg/images/Tin%20Tuc/tivi-box/Thong-tin-FPT-Play-Box/FPT-Play-Box-khuyen-mai-thang-7.jpg',
    content: "Hello everybody, this is demo of masonry react, let 's enjoy it together",
    distribution: 'FPT',
    date: '8h 20/10/2017',
  },
  {
    src: 'https://fptshop.com.vn/Uploads/images/2015/GalaxyS7%20Hotsale%20FPT%20Shop.jpg',
    content: "Hello everybody, this is demo of masonry react, let 's enjoy it together",
    distribution: 'FPT',
    date: '8h 20/10/2017',
  },
  {
    src: 'https://www.dienmayxanh.com/mung-phu-song-63-tinh-thanh/Content/images/thumbnail2.png',
    content: "Hello everybody, this is demo of masonry react, let 's enjoy it together",
    distribution: 'FPT',
    date: '8h 20/10/2017',
  },
  {
    src: 'https://biquyetmuasam.com/wp-content/uploads/2017/08/picture058.jpg',
    content: "Hello everybody, this is demo of masonry react, let 's enjoy it together",
    distribution: 'FPT',
    date: '8h 20/10/2017',
  },
];

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
    this.openMenu = this.openMenu.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  openMenu() {
    this.setState({ isOpenMenu: true });
  }

  onStateChange(e) {
    if (e.isOpen === false) {
      this.setState({ isOpenMenu: false });
    }
  }
  render() {
    return (
      <div id="outer-container">
        <MenuBurger pageWrapId={'page-wrap'} width="300px" outerContainerId={'outer-container'} isOpen={this.state.isOpenMenu} onStateChange={this.onStateChange}>
          <Menu />
        </MenuBurger>
        <main id="page-wrap">
          <div>
            <SlideWrapper>
              <SlideStateless arrHotProducts={arrHotProducts} />
            </SlideWrapper>
            <MasonryStateless arrItems={arrItems} />
            <MenuWrapper invisible={this.state.isOpenMenu} >
              <MenuIcon onClick={this.openMenu} />
            </MenuWrapper>
          </div>
        </main>
      </div>
    );
  }
}
