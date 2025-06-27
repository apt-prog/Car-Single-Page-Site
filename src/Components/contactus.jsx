import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get form values
    const name = document.getElementById("Name").value.trim();
    const date = document.getElementById("Date").value.trim();
    const city = document.getElementById("City").value.trim();
    const age = document.getElementById("Age").value.trim();
    const day = document.getElementById("Day").value.trim();
    const pin = document.getElementById("PinCode").value.trim();
    const email = document.getElementById("Email").value.trim();
    const review = document.getElementById("Review").value.trim();

    if (name && date && city && age && day && pin && email && review) {
      toast.success("Contact US form submitted successfully!", {
        pauseOnHover: true,
        autoClose: 3000,
      });
      // Optionally reset the form here
      e.target.reset();
    } else {
      toast.error("Please fill in all fields before submitting.", {
        pauseOnHover: true,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="Main" className="container mt-5 mb-5">
        <h2 className="h2" id="Contact">
          ContactUs
        </h2>
        <div id="form-part" className="p-4">
          <div id="form">
            <form id="MyForm" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Name">Enter Your Name:</label>
                    <input
                      type="text"
                      id="Name"
                      className="form-control"
                      autoComplete="on"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Date">Enter To-Day Date:</label>
                    <input type="date" id="Date" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="City">Enter Your City Name:</label>
                    <input type="text" id="City" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Age">Enter Your Age:</label>
                    <input type="number" id="Age" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Day">Enter To-Day Day:</label>
                    <input type="text" id="Day" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="PinCode">Enter City Pin-Code:</label>
                    <input
                      type="number"
                      id="PinCode"
                      className="form-control"
                      placeholder="000-000"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="Email">Enter Your Email:</label>
                <input
                  type="email"
                  id="Email"
                  className="form-control"
                  autoComplete="on"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="Review">Enter Your Review:</label>
                <textarea
                  name="Review"
                  id="Review"
                  className="form-control"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit Your FeedBack
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
