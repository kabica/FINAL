import React, { Component } from 'react';


// Tabs Content
import TabContentOne from './TabContentOne';

import '../css/TabsNav.css';





class TabComponent extends Component {
  
  render() {
    return (
      <div>
      
            <TabContentOne />
          
      </div>
    );
  }
}

export default TabComponent;