import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <span>
                  <a href="https://www.linkedin.com/in/colin-johnson-9250b974">
                    linkedin
                  </a>
                </span>
              </h4>
              <h4>
                <span>
                  <a href="https://github.com/ColinJohnson747">Github</a>
                </span>
              </h4>

              <h4>
                <span>
                  <a href="mailto:colinjohnson747@gmail.com">Email</a>
                </span>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
