import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>#Testimonials</h2>
      <h3>What Our Users Are Saying...</h3>
      <div className="testimonials">
        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet consectetur. Magna molestie dui feugiat orci. Convallis quisque dui odio eu tincidunt turpis sit. Mi nulla ultricies faucibus felis sed ut pharetra. At duis vestibulum pellentesque elementum laoreet sed eros. In pulvinar placerat duis mi neque.</p>
          <div className="user-info">
            <img src="./nimra.png" alt="Namra Khan" />
            <h6>Namra Khan</h6>
          </div>
        </div>
        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet consectetur. Magna molestie dui feugiat orci. Convallis quisque dui odio eu tincidunt turpis sit. Mi nulla ultricies faucibus felis sed ut pharetra. At duis vestibulum pellentesque elementum laoreet sed eros. In pulvinar placerat duis mi neque.</p>
          <div className="user-info">
            <img src="./asad.png" alt="Asad Ali" />
            <h6>Asad Ali</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
