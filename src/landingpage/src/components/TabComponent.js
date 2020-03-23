import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import TabDoor from './tabs_nav/TabDoor';
// import TabDevices from './tabs_nav/TabDevices';
import Particles from 'react-particles-js'

// Tabs Content
import TabContentOne from './TabContentOne';

import '../css/TabsNav.css';

class TabComponent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
         
          <TabList className="tab-nav-container">
            
           
            <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
              
              
              <span className="mdScreen" style={{ marginTop: '-5.3125rem' }}>
                Devices
              </span>
            </Tab>
            <Tab
              className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
            </Tab>
          </TabList>
          {/* Tabs Content */}
          <TabPanel>
            <TabContentOne />
          </TabPanel>
          
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;