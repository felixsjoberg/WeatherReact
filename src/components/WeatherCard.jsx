import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import sunnyBg from '../assets/SunnyBg.webp';
import Clock from './Clock';
import sunny from '../assets/Sunny.svg';
import cloudy from '../assets/Cloudy.svg';
import rainy from '../assets/Rainy.svg';
import snowy from '../assets/Snowy.svg';
import mostlySunny from '../assets/MostlySunny.svg';
export default function WeatherCard({ user, weatherData }) {



  if (!weatherData) {
    return <Spinner animation="border" />;
  }

  function weatherIcon() {
    const symbol = weatherData.weatherSymbol;
    if (symbol >= 1 && symbol <= 4) {
      return sunny;
    } else if (symbol >= 5 && symbol <= 7) {
      return mostlySunny;
    } else if ((symbol >= 8 && symbol <= 14) || (symbol >= 18 && symbol <= 20)) {
      return rainy;
    } else if (symbol >= 14 && symbol <= 19) {
      return cloudy;
    }
    else if (symbol >= 21 && symbol <= 27) {
      return snowy;
    }
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