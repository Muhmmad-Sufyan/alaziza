import { useEffect } from 'react';
import './Silder.css';


const Silder = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   '/slide1.png',
  //   '/slideimg2.png',
  //   '/slide3.png',
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, [slides.length]);
  return (
    <>
      <section className="hero-section">
        <div className="content">
          <h1 style={{color:'white'}}>Be A Lifesaver - Donate Blood Today</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Plasi elementum image congue facilisis eget ultrices.</p>
          <div className="buttons">
            <a href="#" className="primary">Register as Donor</a>
            <a href="#" className="secondary">Register Community</a>
          </div>
        </div>
        <img src="/silder1.png" alt="Heart and hands illustration" />
      </section>
      <div className='sli'>

      <section className="stats">
        <div className="box">
          <h3>129k</h3>
          <p>Total no. of donations</p>
        </div>
        <div className='lin'></div>
        <div className="box">
          <h3>12k</h3>
          <p>Success stories</p>
        </div>
      </section>
      </div>
          {/* <div className='slide1'>
      {slides.map((slide, index) => (
        <img
          key={index}
          className={`slideimg ${index === currentSlide ? 'active' : ''}`}
          src={slide}
          alt={`Slide ${index + 1}`}
        />
      ))}
      <button className='prev' onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>Previous</button>
      <button className='next' onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>Next</button>
    </div> */}

      <section className="partners">
        <h2>Our Partners</h2>
        <p style={{textAlign:'center'}}>We have worked with the best companies</p>
        <div className="logos">
          <img src="/partner1.png" alt="Partner 1" />
          <img src="/partner2.png" alt="Partner 2" />
          <img src="/partner3.png" alt="Partner 3" />
          <img src="/partner4.png" alt="Partner 4" />
          <img src="/partner5.png" alt="Partner 5" />
          <img src="/partner6.png" alt="Partner 6" />
        </div>
      </section>
    </>
  );
}

export default Silder;
