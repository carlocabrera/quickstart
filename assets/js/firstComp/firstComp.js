import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Carlo'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div className='home'>
        <div className='Aligner'>
          <div className='Aligner-item'>
            <img src='/img/logo.png' />
            <h1>New Project Quick Start</h1>
            <div className='menu'>
              <ul>
                {/* <div onClick={this.clickedBtn}>Click This:</div> */}
                <li><a href='https://github.com/carlocabrera/quickstart' target='new'>Documentation</a></li>
                <li><a href='https://www.carlo.codes' target='new'>CARLO.CODES</a></li>
              </ul>
            </div>
            <div className='version-num'>
              version 2.0.19
            </div>
            <br />
            <a className='github-button' href='https://github.com/carlocabrera/quickstart' data-icon='octicon-star' data-style='mega' data-count-href='/carlocabrera/quickstart/stargazers' data-count-api='/repos/carlocabrera/quickstart#stargazers_count' data-count-aria-label='# stargazers on GitHub' aria-label='Star carlocabrera/quickstart on GitHub'>Star</a>
          </div>
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
