import React from 'react';
import './aboutUs.css';
// import img from './linkedin.svg'
import img2 from './linked.png';
import img3 from './git.png';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import Slider from './slider'




class AboutUS extends React.Component {

  render() {
    let about = [
      {
        id: 1,
        image: 'https://ca.slack-edge.com/TNGRRLUMA-U03AT1DGP8D-1c6f7f0847e2-512',
        title: 'Ahmad Tayseer ',
        discribtion: "I am Ahmad Tayseer, a Mechanical Engineer who found his passion in programming and coding.",
        gitUrl: 'https://github.com/Ahmad-Tayseer',
        linkedUrl: 'https://github.com/Ahmad-Tayseer'
      },
      {
        id: 2,
        image: 'https://ca.slack-edge.com/TNGRRLUMA-U03AVT6C11Q-87515fcd2e86-512',
        title: 'Mohamad Haimour',
        discribtion: "Full Stack Developer with experience in developing and implementing applications and solutions ",
        gitUrl: 'https://github.com/mohammadhaimour',
        linkedUrl: 'https://github.com/mohammadhaimour'

      },
      {
        id: 3,
        image: 'https://ca.slack-edge.com/TNGRRLUMA-U03AF9KRH9D-d7bb8364949f-512',
        title: 'Bahaa Nimer',
        discribtion: "I'm a Civil Engineer / Full Stack Developer and I have learned: HTML, CSS, and JavaScript(React js, Express js, Node js). ",
        gitUrl: 'https://github.com/BahaaNimer',
        linkedUrl: 'https://github.com/BahaaNimer'

      },
      {
        id: 4,
        image: 'https://ca.slack-edge.com/TNGRRLUMA-U03AY828TNG-4ebd56dd6577-512',
        title: 'Saleh Dalalshh',
        discribtion: "civil engineer and student in programming.",
        gitUrl: 'https://github.com/Salehziad',
        linkedUrl: 'https://github.com/Salehziad'

      },
      {
        id: 5,
        image: 'https://ca.slack-edge.com/TNGRRLUMA-U03AP80U33Q-8796a68ba56d-512',
        title: 'Ahmad Helwa',
        discribtion: "I Have a Programming skills HTML/CSS SQL(SSMS) JavaScript",
        gitUrl: 'https://github.com/ahmadhelwa',
        linkedUrl: 'https://github.com/ahmadhelwa'

      }
    ]
    function handlegitURL(id) {
      about.map((elem) => {
        if (elem.id === id) {
          let gitLink = elem.gitUrl;
          window.open(gitLink);
        }
      })
    }

    function handlegitURL(id) {
      about.map((elem) => {
        if (elem.id === id) {
          let Link = elem.linkedUrl;
          window.open(Link);
        }
      })

    }
    return (
      <div className='perent1'>

        <Slider />
        <hr style={{ width: '100%', marginTop: '100px', }}></hr>
        <div className='parent'>
          <h1 >About US
          </h1>

          <p className='head' style={{ fontSize: '20px' }} >Ticketcom is an ecommerce website consider as a link between service providers and clients.
            This website provide tickets for tourism trips that companies present, then the clients can look at them, book and purchase.</p>
          <hr style={{ width: '100%' }}></hr>
          <h2>Our Team</h2>
          <p className='head'></p>

          <div className='cardsGroup'>

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

                    <p
                      className="WishlistA"

                    >

                      <img className='git' src={img3} onClick={() => handlegitURL(item.id)}></img>

                    </p>
                    <p className="CartA" >

                      {/* <i className="fa-brands fa-linkedin" ></i> */}
                      <img className='linkedin' src={img2} onClick={() => handlegitURL(item.id)}></img>

                      {/* 
                      <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-0"
                        href="#!"
                        role="button"
                        style={{}}
                      >
                        <MDBIcon fab icon="linkedin" />

                      </MDBBtn>
                      <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                        style={{}}
                      >
                        <MDBIcon fab icon="github" />

                      </MDBBtn> */}





                    </p>


                  </div>
                </div>
              );
            })}

          </div>
          <div className='lastTwo'>

          </div>

        </div>

      </div>

    )

  }
}


export default AboutUS;




















// import React from 'react';
// import "./about.css";


// export default function aboutUs() {
//     return (
//         <div>
//             <h1 className="about" >aboutUs</h1>
//             <div className="parent">
//                 <div className="Card">
//                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
//                     <div className="Data">
//                         <h2 className="Title">Mohammad Haimour</h2>
//                         <h3 className="Duration">  Full Stack Developer</h3>
//                         <h3 className="Price"></h3>
//                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
//                     </div>
//                 </div>

//                 <div className="Card">
//                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
//                     <div className="Data">
//                         <h2 className="Title">Mohammad Haimour</h2>
//                         <h3 className="Duration">  Full Stack Developer</h3>
//                         <h3 className="Price"></h3>
//                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
//                     </div>
//                 </div>
//                 <div className="Card">
//                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
//                     <div className="Data">
//                         <h2 className="Title">Mohammad Haimour</h2>
//                         <h3 className="Duration">  Full Stack Developer</h3>
//                         <h3 className="Price"></h3>
//                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
//                     </div>
//                 </div>
//                 <div className="Card">
//                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
//                     <div className="Data">
//                         <h2 className="Title">Mohammad Haimour</h2>
//                         <h3 className="Duration">  Full Stack Developer</h3>
//                         <h3 className="Price"></h3>
//                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
//                     </div>
//                 </div>
//                 <div className="Card">
//                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
//                     <div className="Data">
//                         <h2 className="Title">Mohammad Haimour</h2>
//                         <h3 className="Duration">  Full Stack Developer</h3>
//                         <h3 className="Price"></h3>
//                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
//                     </div>
//                 </div>
//                 <div className="Card">
//                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
//                     <div className="Data">
//                         <h2 className="Title">Mohammad Haimour</h2>
//                         <h3 className="Duration">  Full Stack Developer</h3>
//                         <h3 className="Price"></h3>
//                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

































//helwa
// import React from 'react';
// import { Card } from "react-bootstrap";
// import './about.css';
// import abd from './x8.jpg'
// import omar from './x8.jpg'
// import aya from './x8.jpg'
// import khalil from './x8.jpg'
// import noor from './x8.jpg'
// import nura from './x8.jpg'


// class AboutUS extends React.Component {
//     render() {
//         return (
//             <div className='parent'>
//                 <h1 >About US
//                 </h1>

//                 <p className='head' style={{ fontSize: '20px' }} >Ticketcom is an ecommerce website consider as a link between service providers and clients.
//                     This website provide tickets for tourism trips that companies present, then the clients can look at them, book and purchase.</p>
//                 <hr></hr>
//                 <h2>Our Team</h2>
//                 <p className='head'></p>

//                 <div className='cardsGroup'>

//                     <Card style={{ width: '18rem' }} className='memberCard'>
//                         {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
//                         <img className='member' src={noor} alt='image1' />
//                         <Card.Body>
//                             <Card.Title className='textName'>Mohammad Haimour</Card.Title>
//                             <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
//                             <Card.Text className='description'>
//                                 have a bachelor's degree in civil engineering from  Hashemite University, and has a passion to be a professional in the tech field.
//                             </Card.Text>

//                         </Card.Body>
//                     </Card>

//                     <Card style={{ width: '18rem' }} className='memberCard'>
//                         {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
//                         <img className='member' src={aya} alt='image1' />
//                         <Card.Body>
//                             <Card.Title className='textName'>Mohammad Haimour</Card.Title>
//                             <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
//                             <Card.Text className='description'>
//                                 have a bachelor’s degree in architectural engineering from Al al-Bayt University, decided to shift her career to be a full stack developer.

//                             </Card.Text>

//                         </Card.Body>
//                     </Card>

//                     <Card style={{ width: '18rem' }} className='memberCard'>
//                         {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
//                         <img className='member' src={omar} alt='image2' />
//                         <Card.Body>
//                             <Card.Title className='textName'>Mohammad Haimour</Card.Title>
//                             <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
//                             <Card.Text className='description'>
//                                 have a Master's degree in Computer science, intersted in computer networks, machine learning and web development.

//                             </Card.Text>

//                         </Card.Body>
//                     </Card>

//                     <Card style={{ width: '18rem' }} className='memberCard'>
//                         {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
//                         <img className='member' src={khalil} alt='image3' />
//                         <Card.Body>
//                             <Card.Title className='textName'>Mohammad Haimour </Card.Title>
//                             <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
//                             <Card.Text className='description'>
//                                 hold a bachelor's in Software Engineering from Zarqa university, passionate about learning new technologies and skills, he is a great developer.
//                             </Card.Text>

//                         </Card.Body>
//                     </Card>

//                 </div>
//                 <div className='lastTwo'>
//                     <Card style={{ width: '18rem' }} className='memberCard'>
//                         {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
//                         <img className='member' src={abd} alt='image3' />
//                         <Card.Body>
//                             <Card.Title className='textName'>Mohammad Haimour </Card.Title>
//                             <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
//                             <Card.Text className='description'>
//                                 hold a bachelor's degree in computer science from Jordanian university, have a passion for programming, so now he's a web development student at ASAC.
//                             </Card.Text>

//                         </Card.Body>
//                     </Card>
//                     <Card style={{ width: '18rem' }} className='memberCard'>
//                         {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
//                         <img className='member' src={nura} alt='image4' />
//                         <Card.Body>
//                             <Card.Title className='textName'>Mohammad Haimour</Card.Title>
//                             <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
//                             <Card.Text className='description'>
//                                 I have bachelor's degree in civil engineering  from
//                                 Hashemite university , I am very intersted to learn about web development.
//                             </Card.Text>

//                         </Card.Body>
//                     </Card>
//                 </div>

//             </div>

//         )

//     }
// }


// export default AboutUS;




















// // import React from 'react';
// // import "./about.css";


// // export default function aboutUs() {
// //     return (
// //         <div>
// //             <h1 className="about" >aboutUs</h1>
// //             <div className="parent">
// //                 <div className="Card">
// //                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
// //                     <div className="Data">
// //                         <h2 className="Title">Mohammad Haimour</h2>
// //                         <h3 className="Duration">  Full Stack Developer</h3>
// //                         <h3 className="Price"></h3>
// //                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
// //                     </div>
// //                 </div>

// //                 <div className="Card">
// //                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
// //                     <div className="Data">
// //                         <h2 className="Title">Mohammad Haimour</h2>
// //                         <h3 className="Duration">  Full Stack Developer</h3>
// //                         <h3 className="Price"></h3>
// //                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
// //                     </div>
// //                 </div>
// //                 <div className="Card">
// //                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
// //                     <div className="Data">
// //                         <h2 className="Title">Mohammad Haimour</h2>
// //                         <h3 className="Duration">  Full Stack Developer</h3>
// //                         <h3 className="Price"></h3>
// //                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
// //                     </div>
// //                 </div>
// //                 <div className="Card">
// //                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
// //                     <div className="Data">
// //                         <h2 className="Title">Mohammad Haimour</h2>
// //                         <h3 className="Duration">  Full Stack Developer</h3>
// //                         <h3 className="Price"></h3>
// //                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
// //                     </div>
// //                 </div>
// //                 <div className="Card">
// //                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
// //                     <div className="Data">
// //                         <h2 className="Title">Mohammad Haimour</h2>
// //                         <h3 className="Duration">  Full Stack Developer</h3>
// //                         <h3 className="Price"></h3>
// //                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
// //                     </div>
// //                 </div>
// //                 <div className="Card">
// //                     <img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt="" className="image" />
// //                     <div className="Data">
// //                         <h2 className="Title">Mohammad Haimour</h2>
// //                         <h3 className="Duration">  Full Stack Developer</h3>
// //                         <h3 className="Price"></h3>
// //                         <p className="Description">Full Stack Developer with experience in developing and implementing applications and solutions using a range of technologies & programming languages</p>
// //                     </div>
// //                 </div>

// //             </div>
// //         </div>
// //     )
// // }
