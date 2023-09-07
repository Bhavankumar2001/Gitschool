import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Images/Carousel 1.jpeg';
import img2 from '../Images/Carousel 2.jpeg';
import img3 from '../Images/Carousel 3.jpeg';
import './Slider.css';

function Slider() {
  return (
   <div>
    <Carousel fade >
      <Carousel.Item >
        <img src={img1} width='100%' height='509px' alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>At Silver Oaks we build values along with imparting knowledge</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} width='100%' height='509px'  alt="First slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Silver Oaks is a continuously growing ecosystem of learning and development.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} width='100%' height='509px' alt="First slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>We are grooming lifelong learners, passionate innovators, and responsible global citizens.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default Slider;