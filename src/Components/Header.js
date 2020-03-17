import React, { Component } from 'react';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         mouseIsEnter: false,
      }
      this.onClick = this.onClick.bind(this);
   }

   onClick() {
      let i;
      const nav = document.getElementById("nav");
      const scrolldown = document.getElementById("scrolldown");
      const smoothscroll = nav.getElementsByClassName("smoothscroll");
      const smoothscrollIcon = scrolldown.getElementsByClassName("smoothscroll");
      for (i = 0; i < smoothscroll.length; i++) {
         smoothscroll[i].addEventListener("click", function () {
            const current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active", "");
            this.className += " active";
         });
      }
      smoothscrollIcon[0].addEventListener("click", function () {
         const current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace("active", "");
         const active = document.getElementById("about-section");
         active.className += " active";
      });
   }

   render() {
      if (this.props.data) {
         var name = this.props.data.name;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">
            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav" >
                  <li><a className="smoothscroll active" href="#home" onClick={this.onClick}>Home</a></li>
                  <li><a id="about-section" className="smoothscroll" href="#about" onClick={this.onClick}>About</a></li>
                  <li><a className="smoothscroll" href="#resume" onClick={this.onClick}>Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio" onClick={this.onClick}>Works</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {name}.</h1>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown" id="scrolldown">
               <a className="smoothscroll" href="#about" onClick={this.onClick}><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
