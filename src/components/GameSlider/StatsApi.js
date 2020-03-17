import React, { Component } from 'react';

class StatsApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch("https://public-api.tracker.gg/v2/overwatch/standard/profile/battlenet/MirroR%2311669", {
      method: 'GET',
      headers: {  
        'TRN-Api-Key': 'd6cb4f92-76d2-4d61-83f6-7d5bda0bd524',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'mode': 'cors'
      }
    })   
      // .then(response => response.json())
      .then((responseData) => {
        this.setState({ isLoaded: true,  items: responseData['data']['segments']['0']['stats']});
        console.log(responseData['data']['segments']['0']['stats'])
      })
      .catch(error => console.log(error));
  }

  render() {
    const { isLoaded, items } = this.state;
    return(
      <div>
        <ul>
          {/* {items.map(item => (
            <li key={item['data']['segments']['0']['stats']}>
              DATAAAA: {item['data']['segments']['0']['stats']}  
            </li>
          ))} */}
            <li>
              {items}
            </li>
        </ul>

      </div>


    )
  }
}

export default StatsApi