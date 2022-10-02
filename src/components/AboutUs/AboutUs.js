import React from 'react';
import { Card } from "react-bootstrap";
import './about.css';
import abd from './x8.jpg'
import omar from './x8.jpg'
import aya from './x8.jpg'
import khalil from './x8.jpg'
import noor from './x8.jpg'
import nura from './x8.jpg'


class AboutUS extends React.Component {
    render() {
        return (
            <div className='parent'>
                <h1 >About US
                </h1>

                <p className='head' style={{ fontSize: '20px' }} >Ticketcom is an ecommerce website consider as a link between service providers and clients.
                    This website provide tickets for tourism trips that companies present, then the clients can look at them, book and purchase.</p>
                <hr></hr>
                <h2>Our Team</h2>
                <p className='head'></p>

                <div className='cardsGroup'>

                    <Card style={{ width: '18rem' }} className='memberCard'>
                        {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                        <img className='member' src={noor} alt='image1' />
                        <Card.Body>
                            <Card.Title className='textName'>Ahmad Helwa</Card.Title>
                            <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                            <Card.Text className='description'>
                                have a bachelor's degree in civil engineering from  Hashemite University, and has a passion to be a professional in the tech field.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='memberCard'>
                        {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                        <img className='member' src={aya} alt='image1' />
                        <Card.Body>
                            <Card.Title className='textName'>Ahmad Helwa</Card.Title>
                            <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                            <Card.Text className='description'>
                                have a bachelor’s degree in architectural engineering from Al al-Bayt University, decided to shift her career to be a full stack developer.

                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='memberCard'>
                        {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                        <img className='member' src={omar} alt='image2' />
                        <Card.Body>
                            <Card.Title className='textName'>Ahmad Helwa</Card.Title>
                            <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                            <Card.Text className='description'>
                                have a Master's degree in Computer science, intersted in computer networks, machine learning and web development.

                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='memberCard'>
                        {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                        <img className='member' src={khalil} alt='image3' />
                        <Card.Body>
                            <Card.Title className='textName'>Ahmad Helwa </Card.Title>
                            <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                            <Card.Text className='description'>
                                hold a bachelor's in Software Engineering from Zarqa university, passionate about learning new technologies and skills, he is a great developer.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className='lastTwo'>
                    <Card style={{ width: '18rem' }} className='memberCard'>
                        {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                        <img className='member' src={abd} alt='image3' />
                        <Card.Body>
                            <Card.Title className='textName'>Ahmad Helwa </Card.Title>
                            <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                            <Card.Text className='description'>
                                hold a bachelor's degree in computer science from Jordanian university, have a passion for programming, so now he's a web development student at ASAC.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='memberCard'>
                        {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                        <img className='member' src={nura} alt='image4' />
                        <Card.Body>
                            <Card.Title className='textName'>Ahmad Helwa</Card.Title>
                            <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                            <Card.Text className='description'>
                                I have bachelor's degree in civil engineering  from
                                Hashemite university , I am very intersted to learn about web development.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

            </div>

        )

    }
}


export default AboutUS;
