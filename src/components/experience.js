import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">Web Developer</a> <span>2015-2022</span>
                      </h2>
                      <p>
                        I have experience desigining and implementing websites
                        and web applications. I have created client websites for
                        nonprofits and small businesses, and I have built web
                        applications for banking and finance sites.
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">JavaScript Expert</a> <span>2020-2022</span>
                      </h2>
                      <p>
                        JavaScript and JavaScript-based frameworks is my
                        specialty. I have thorough knowledge of JavaScript
                        libraries, and I have hands-on experience with
                        frameworks like React.js.
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">WordPress Site Builder</a>{" "}
                        <span>2018-2022</span>
                      </h2>
                      <p>
                        I have built numerous sites using WordPress, including
                        sites for small businesses and nonprofits. I can easily
                        assemble a clean, beautiful site that is both blazing
                        fast and secure.
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">React.js Experience</a>{" "}
                        <span>2021-2022</span>
                      </h2>
                      <p>
                        I have experience building sites using React.js. This
                        portfolio site is one such example.
                      </p>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
