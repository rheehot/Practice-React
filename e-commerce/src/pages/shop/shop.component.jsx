import React from 'react';

import SHOP_Data from './shop.data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_Data
    };
  }

  render() {
    return <div>SHOP PAGE</div>
  }
}

export default ShopPage;