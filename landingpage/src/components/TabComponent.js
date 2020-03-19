import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import Particles from 'react-particles-js'

// Tabs Content
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
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
            <Tab
              className={`${
                this.state.tabIndex === 0 ? 'tab-selected active' : null
                }`}
            >
              <TabDoor />
              <p className="lgScreen" style={{ marginBottom: '1.875rem' }}>
                <strong>
                  No commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
              <span className="mdScreen" style={{ marginTop: '0.4rem' }}>
                Cancel
              </span>
            </Tab>
            <div>
              <Particles
                params={{
                  particles: {
                    line_linked: {
                      shadow: {
                        enable: true,
                        color: "#3CA9D1",
                        blur: 5
                      }
                    }
                  }
                }}
              />
            </div>
            <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
              <TabDevices />
              <p className="lgScreen" style={{ marginTop: '-5.3125rem' }}>
                <strong>Track anything</strong>
              </p>
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
          <TabPanel>
            <TabContentTwo />
          </TabPanel>
          
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;