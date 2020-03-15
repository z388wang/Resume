import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>



          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href={this.props.goBackPage}><i className={this.props.iconType}></i></a></div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  goBackPage: PropTypes.string,
  iconType: PropTypes.string,
};

export default Footer;
