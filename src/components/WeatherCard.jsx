import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import sunnyBg from '../assets/SunnyBg.webp';
import Clock from './Clock';

export default function WeatherCard({ user, weatherData, weatherIcon }) {

  if (!weatherData) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      <Card className="text-center bg-dark align-center text-white weaterCard">
        <Card.Img src={sunnyBg} alt="Card image" />
        <Card.ImgOverlay>
          <Container>
            <Row className='mb-3'>
              <Col>
                <Card.Text>
                  <img className='fs-1 p-2 fw-bold col-sm-6' src={weatherIcon()} alt="" />
                  <span className='fs-1 p-2 fw-bold col-sm-6'>{weatherData.temperature}°C</span>
                </Card.Text>
              </Col>
              <Col>
                <h2 className='fs-5 m-0'>Vädret just nu</h2>
                <Card.Title className='fs-1'>{user.location.City}</Card.Title>
                <Clock />
              </Col>
            </Row>

            <Row>
              <Col className='shadow'>
                <h2 className='fs-5 '>Luftfuktighet</h2>
                <span >{weatherData.humidity}%</span>
              </Col>
              <Col >
                <div className='shadow'>
                  <h2 className='fs-5'>Vind</h2>
                  <span>{weatherData.windSpeed}m/s</span>
                  <br />
                </div>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card >
    </>
  )
}