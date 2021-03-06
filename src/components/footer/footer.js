import React from "react"
import "./footer.scss"
import { Link } from "@reach/router"

import { IconContext } from "react-icons"
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

export default class Footer extends React.Component {
  render() {
    var content = {
      Links: [
        {
          title: "Home",
          link_url: "/",
        },
        {
          title: "About",
          link_url: "/about",
        },
        {
          title: "How It Works",
          link_url: "/#howItWorks",
        },
      ],
      Connect: [
        {
          title: "Facebook",
          link_url: "https://m.facebook.com/hoodootechnologies/",
        },
        {
          title: "Instagram",
          link_url: "https://www.instagram.com/hoodoo_cooks/?hl=en",
        },
        {
          title: "LinkedIn",
          link_url: "https://www.linkedin.com/company/hoodoo-technologies/",
        },
      ],
      Blog: [
        {
          title: "Our Blogs",
          link_url: "/blogs",
        },
      ],
      Contact: [
        {
          title: "hello@hoodoo.co.in",
          link_url: "hello@hoodoo.co.in",
        },
        {
          title: "9687 704 308",
          link_url: "9687 704 308",
          type: "phone",
        },
        {
          title: "9687 704 308",
          link_url: "9687 704 308",
          type: "whatsapp",
        },
      ],
    }

    return (
      <footer>
        <div className="footer-container row">
          <div className="col-sm-8 offset-sm-2">
            <div className="row">
              {Object.keys(content).map((item, i) => {
                return (
                  <div className="col-sm-3" key={i}>
                    <p className="footer-title">{item}</p>
                    {content[item].map((links, i) => {
                      return (
                        <div key={i}>
                          {(item === "Links" || item === "Blog") && (
                            <Link to={links.link_url}>
                              <p className="footer-links">{links.title}</p>
                            </Link>
                          )}
                          {item === "Connect" && (
                            <p className="footer-links">
                              <a
                                rel="noopener noreferrer"
                                href={links.link_url}
                                target="_self"
                              >
                                {links.title}
                              </a>
                            </p>
                          )}
                          {links.title === "hello@hoodoo.co.in" && (
                            <p className="footer-links">
                              <a
                                rel="noopener noreferrer"
                                href={`mailto:${links.link_url}`}
                              >
                                <IconContext.Provider
                                  value={{
                                    className: "bars-icon",
                                  }}
                                >
                                  <FaEnvelope />
                                </IconContext.Provider>
                                <span> {links.title}</span>
                              </a>
                            </p>
                          )}
                          {links.title === "9687 704 308" &&
                            links.type === "phone" && (
                              <p className="footer-links">
                                <IconContext.Provider
                                  value={{
                                    className: "bars-icon",
                                  }}
                                >
                                  <FaPhoneAlt />
                                </IconContext.Provider>
                                <a href="tel:+91-968-770-4308">
                                  <span> {links.title}</span>
                                </a>
                              </p>
                            )}
                          {links.title === "9687 704 308" &&
                            links.type === "whatsapp" && (
                              <p className="footer-links">
                                <IconContext.Provider
                                  value={{
                                    className: "bars-icon",
                                  }}
                                >
                                  <FaWhatsapp />
                                </IconContext.Provider>
                                <span> {links.title}</span>
                              </p>
                            )}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            <hr />
            <div>
              <p className="footer">
                © {new Date().getFullYear()} chefed.co. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
