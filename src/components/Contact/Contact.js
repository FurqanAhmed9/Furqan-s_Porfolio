import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
const Contact = () => {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <div id="contact">
      <div className="form">
        <form
        //   onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          {true ? (
            <>
              <div id="errormessage" className={true ? "show" : ""}>
                {/* {errorMsg} */}
              </div>
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                //   value={contactData.name || ""}
                //   onChange={(e) => handleChange(e)}
                //   onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <input
                  name="mobile"
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder="Mobile"
                //   onBlur={handleBlur}
                //   value={contactData.mobile || ""}
                //   onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  name="company"
                  type="text"
                  className="form-control"
                  placeholder="Company"
                //   value={contactData.company || ""}
                //   onChange={(e) => handleChange(e)}
                //   onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                //   value={contactData.email || ""}
                //   onChange={(e) => handleChange(e)}
                //   onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                //   value={contactData.message || ""}
                //   onChange={(e) => handleChange(e)}
                //   onBlur={handleBlur}
                  rows="3"
                />
              </div>
              <p className="text-right mb-0">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit Now"
                />
              </p>
            </>
          ) : (
            <div className="show" id="sendmessage">
              Thank for your message. We will contact you soon.
            </div>
          )}
        </form>
      </div>
    </div>
    </Container>
  );
};

export default Contact;
