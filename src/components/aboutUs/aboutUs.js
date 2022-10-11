import React, { useEffect } from "react";
import "./aboutUs.css";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";

function AboutUS() {
  let about = [
    {
      id: 1,
      image: "https://ca.slack-edge.com/TNGRRLUMA-U03AT1DGP8D-1c6f7f0847e2-512",
      title: "Ahmad Tayseer ",
      discribtion:
        "Mechanical engineer that have a passion on programming and software development. Looking forward to make a position for myself in the competitive IT world.",
      gitUrl: "https://github.com/Ahmad-Tayseer",
      linkedUrl: "https://www.linkedin.com/in/ahmad-abumailesh/",
    },
    {
      id: 2,
      image: "https://ca.slack-edge.com/TNGRRLUMA-U03AVT6C11Q-87515fcd2e86-512",
      title: "Mohamad Haimour",
      discribtion:
        "Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages.",
      linkedUrl: "https://www.linkedin.com/in/mohammad-haimour-21b193235/",
      gitUrl: "https://github.com/mohammadhaimour",
    },
    {
      id: 3,
      image: "https://ca.slack-edge.com/TNGRRLUMA-U03AF9KRH9D-d7bb8364949f-512",
      title: "Bahaa Nimer",
      discribtion:
        "Civil engineer and software developer, with positive attitude, strong work ethic and a keen desire to learn and development, and I'm always willing to help out if needed.",
      gitUrl: "https://github.com/BahaaNimer",
      linkedUrl: "https://www.linkedin.com/in/bahaa-nimer/",
    },
    {
      id: 4,
      image: "https://ca.slack-edge.com/TNGRRLUMA-U03AY828TNG-4ebd56dd6577-512",
      title: "Saleh Dalalshh",
      discribtion:
        "Civil engineer that have a passion on programming and software development. Looking forward to make a position for myself in the competitive IT companies.",
      gitUrl: "https://github.com/Salehziad",
      linkedUrl: "https://www.linkedin.com/in/saleh-ziad/",
    },
    {
      id: 5,
      image: "https://ca.slack-edge.com/TNGRRLUMA-U03AP80U33Q-8796a68ba56d-512",
      title: "Ahmad Helwa",
      discribtion:
        "I studied computer information systems and full stack developing, have great communication skills, and I'm seeking a challenging position to prove myself.",
      gitUrl: "https://github.com/ahmadhelwa",
      linkedUrl: "https://www.linkedin.com/in/ahmad-h-0155b9125/",
    },
  ];
  function handlegitURL(id) {
    about.map((elem) => {
      if (elem.id === id) {
        let gitLink = elem.gitUrl;
        window.open(gitLink);
      }
    });
  }

  function handleLinkedIn(id) {
    about.map((elem) => {
      if (elem.id === id) {
        let Link = elem.linkedUrl;
        window.open(Link);
      }
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="perent1">
      <div className="parent">
        <h1>About US</h1>

        <p className="head" style={{ fontSize: "20px" }}>
          Ticketcom is an e-commerce website consider as a link between service
          providers and clients. This website provide tickets for tourism trips
          that companies present, then the clients can look at them, book and
          purchase.
        </p>
        <hr style={{ width: "100%" }}></hr>
        <h2>Our Team</h2>
        <p className="head"></p>

        <div className="cardsGroup">
          {about.map((item) => {
            return (
              <div className="CardA">
                <img src={item.image} alt="" className="imageA" />
                <div className="DataA">
                  <h2 className="TitleA">{item.title}</h2>
                  <h3 className="CategoryA"></h3>
                  <h3 className="DurationA"></h3>
                  <h3 className="PriceA"></h3>
                  <p className="DescriptionA">{item.discribtion}</p>
                  <p className="WishlistA"></p>
                  <p className="CartA">
                    <div style={{ marginLeft: "-65px" }}>
                      <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                        style={{ border: "1px solid white" }}
                        onClick={() => {
                          handleLinkedIn(item.id);
                        }}
                      >
                        <i class="fa-brands fa-linkedin"></i>
                      </MDBBtn>
                      <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                        style={{ border: "1px solid white" }}
                        onClick={() => {
                          handlegitURL(item.id);
                        }}
                      >
                        <MDBIcon fab icon="github" />
                      </MDBBtn>
                    </div>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lastTwo"></div>
      </div>
    </div>
  );
}

export default AboutUS;
