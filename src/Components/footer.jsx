const Footer_Sec = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>DriveMart</h3>
              <p>
                Your trusted partner in finding the perfect vehicle. We offer a
                wide range of new and used cars, along with top-notch service
                and financing options.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#Inventory">Inventory</a>
                </li>
                <li>
                  <a href="#Services">Services</a>
                </li>
                <li>
                  <a href="#About">About Us</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                123 Auto Drive <br />
                Carville, CA 90210
                <br />
                India <br />
                <strong>Phone:</strong> +91 234 567 8900
                <br />
                <strong>Email:</strong> info@cardealership.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe for exclusive deals and automotive news!</p>
              <form action="" method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright">
                &copy; 2023{" "}
                <strong>
                  <span>CarSite's </span>
                </strong>
                , All Rights Reserved , Owned By Fenil Vegad [FV]
              </div>
            </div>
            <div className="col-md-6">
              <div className="credits">
                <a href="#">Privacy Policy</a> |{" "}
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer_Sec;
