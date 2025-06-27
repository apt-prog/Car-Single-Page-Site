import toyota from "../assets/toyata.webp";
import volvo from "../assets/volvo.jpg";
import mustang from "../assets/mustang.avif";
import golf from "../assets/golf.avif";
import bmw from "../assets/bmw.webp";
import t2 from "../assets/t2.jpg";

const Inventry = () => {
  return (
    <>
      <div className="container mt-5" id="Inventory">
        <h2 className="mb-4 h2">Inventory</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 inventory-item">
            <img src={toyota} alt="Toyota Camry" />
            <div className="content">
              <h3>Toyota Camry</h3>
              <p>Model: Sedan</p>
              <p>Price: $20,000</p>
              <p>Year: 2022</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 inventory-item">
            <img src={volvo} alt="Volvo XC60" />
            <div className="content">
              <h3>Volvo XC60</h3>
              <p>Model: SUV</p>
              <p>Price: $30,000</p>
              <p>Year: 2023</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 inventory-item">
            <img src={mustang} alt="Ford Mustang" />
            <div className="content">
              <h3>Ford Mustang</h3>
              <p>Model: Coupe</p>
              <p>Price: $25,000</p>
              <p>Year: 2022</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 inventory-item">
            <img src={golf} alt="Volkswagen Golf" />
            <div className="content">
              <h3>Volkswagen Golf</h3>
              <p>Model: Hatchback</p>
              <p>Price: $18,000</p>
              <p>Year: 2021</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 inventory-item">
            <img src={bmw} alt="BMW 4 Series" />
            <div className="content">
              <h3>BMW 4 Series</h3>
              <p>Model: Convertible</p>
              <p>Price: $35,000</p>
              <p>Year: 2023</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 inventory-item">
            <img src={t2} alt="Toyota Tundra" />
            <div className="content">
              <h3>Toyota Tundra</h3>
              <p>Model: Pickup</p>
              <p>Price: $40,000</p>
              <p>Year: 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventry;
