import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                      <strong>Hi! I'm Ronan.</strong> I'm a self-taught web
                      developer currently enrolled at the University of
                      Minnesota. I specialize in JavaScript, React.js, and
                      WordPress. I also have extensive knowledge of HTML and
                      CSS, and experience creating basic Python applications.
                    </p>
                    <p>
                      On a more personal note, I'm vegan, I have four cats, and
                      I published a novel in 2021 called The Sapphanese Guild.
                      Read on for more details!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="services color-1">
                    <span className="icon2">
                      <i className="icon-bulb" />
                    </span>
                    <h3>Creativity & Lateral Thinking</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="services color-2">
                    <span className="icon2">
                      <i className="icon-globe-outline" />
                    </span>
                    <h3>Web Design</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="services color-3">
                    <span className="icon2">
                      <i className="icon-data" />
                    </span>
                    <h3>Software</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="services color-4">
                    <span className="icon2">
                      <i className="icon-phone3" />
                    </span>
                    <h3>Application</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="hire">
                    <h2>
                      I am happy to know you <br />
                      that 300+ projects done sucessfully!
                    </h2>
                    <a href="#" className="btn-hire">
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
