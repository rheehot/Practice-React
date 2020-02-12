import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from './sections.data';

import './directory.styles.scss';

// 일단은 Components로 만듭시다. 어려우니까
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;