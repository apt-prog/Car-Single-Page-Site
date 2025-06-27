import lambo from "../assets/lambo2.webp";
import bugati from "..//assets/bugati.jpg";
import ferari from "../assets/ferari1.jpg";

const Hero_Sec = () => {
  return (
    <>
      <div
        id="carCarousel"
        className="carousel slide container-fluid"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ferari} className="d-block w-100 img-fluid" alt="Car 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Your Future Car Look Like</h5>
              <p>choose now and select it and make order with us.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bugati} className="d-block w-100 img-fluid" alt="Car 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Your Future Car Look Like</h5>
              <p>choose now and select it and make order with us.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={lambo} className="d-block w-100 img-fluid" alt="Car 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Your Future Car Look Like</h5>
              <p>choose now and select it and make order with us.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hero_Sec;
