import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

// 일단은 Components로 만듭시다. 어려우니까
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'PS4',
          imageUrl: 'https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
          id: 1,
          linkUrl: 'ps4'
        },
        {
          title: 'XBOX',
          imageUrl: 'https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'NINTENDO',
          imageUrl: 'https://images.unsplash.com/photo-1506865952017-eba1745396f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2725&q=80',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'PC',
          imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'ARCADE',
          imageUrl: 'https://images.unsplash.com/photo-1535949134169-aa64c1a54f86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3146&q=80',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
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