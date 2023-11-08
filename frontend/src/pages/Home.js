import React from "react";
import "./style.css";
import img1 from "./IMAGES/img1.jpg";
import img2 from "./IMAGES/img2.jpg";
import img3 from "./IMAGES/img3.jpg";
import img4 from "./IMAGES/img4.jpg";
import dypcoeImage from "./IMAGES/dypcoe.jpg";
import ministryOfEducationImage from "./IMAGES/Ministry-of-Education.jpg";
import nsuiImage from "./IMAGES/nsui.jpg";
import psychologistImage from "./IMAGES/pyscologist.jpg";

const Home = () => {
  return (
    <div>
      <section className="bg-main bg-color hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start avoid p-2">
              <h1 style={{ whiteSpace: "nowrap" }}>
                Join Our Community,
                <br /> Where Laughter Thrives
              </h1>
              <p style={{ color: "white" }}>
                Cultivating a friendly campus culture where laughter thrives,
                while resolutely standing against ragging and promoting a safe,
                respectful environment...
              </p>
              <div className="text-center">
                <button
                  className="text-capitalize btn btn-primary px-5 py-2"
                  data-bs-toggle="tooltip"
                  data-bs-title="Contact Now"
                >
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1695494581">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="service-section">
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading">
            Taking Action: Fill Undertaking, Report Complaint and <br />
            Track Your Complaint
          </h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            {/* Card 1 */}
            <div className="col-12 col-lg-4 col-md-12 d-flex">
              <div className="text-center card-box rounded-2 p-5 d-flex flex-column align-items-center align-items-end">
                <img
                  src={img1}
                  alt="Can't Load Image"
                  className="img-fluid"
                  width="300px"
                />
                <h5 className="my-3 fw-normal">Fill Undertaking</h5>
                <p className="mb-5">
                  Commit to a safer campus by filling the undertaking. Join us
                  in creating a secure and respectful environment
                </p>
                <div className="d-flex justify-content-center align-items-center text-center mt-auto">
                  <a
                    href="#services"
                    className="icon-back rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-arrow-right fa-beat"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-lg-4 col-md-12 d-flex">
              <div className="text-center card-box rounded-2 p-5 shadow d-flex flex-column align-items-center align-items-end">
                <img
                  src={img2}
                  alt="Can't Load Image"
                  className="img-fluid"
                  width="300px"
                />
                <h5 className="my-3 fw-normal">Register Complaint</h5>
                <p className="mb-5">
                  Make your voice heard – report incidents quickly. Contribute
                  to a safe campus by registering complaints.
                </p>
                <div className="d-flex justify-content-center align-items-center text-center mt-auto">
                  <a
                    href="#services"
                    className="icon-back rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-arrow-right fa-beat"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-lg-4 col-md-12 d-flex">
              <div className="text-center card-box rounded-2 p-5 d-flex flex-column align-items-center align-items-end">
                <img
                  src={img3}
                  alt="Can't Load Image"
                  className="img-fluid"
                  width="300px"
                />
                <h5 className="my-3 fw-normal">Track Report</h5>
                <p className="mb-5">
                  Stay informed and monitor progress. Track your reports to
                  actively participate in maintaining a secure campus.
                </p>
                <div className="d-flex justify-content-center align-items-center text-center mt-auto">
                  <a
                    href="#services"
                    className="icon-back rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-arrow-right fa-beat"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color achievement">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 img-section">
              <figure>
                <img
                  src={img4}
                  alt="Can't Load Image"
                  className="img-fluid rounded"
                  width="300px"
                />
              </figure>
            </div>
            <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h1 className="common-heading">Antiragging</h1>
              <p className="fw-bold">
                Within our higher education system, the persistent problem of
                ragging continues to be a cause for alarm. Despite the tragic
                consequences it has imposed on countless students' lives and
                academic journeys, some still regard it as a misguided rite of
                passage.
                <br /> Antiragging is a resolute response to a distressing issue
                within our higher education system. It stands as a formidable
                deterrent against the damaging practice of ragging, aiming to
                ensure the safety and well-being of students.
              </p>
              <div className="text-center">
                <button
                  className="text-capitalize btn btn-primary px-5 py-2"
                  data-bs-toggle="tooltip"
                  data-bs-title="Contact Now"
                >
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="international pb-5">
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading mt-5">Our Collaborations</h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="px-3 py-4 shadow">
                <div className="d-flex align-items-center">
                  <img
                    src={dypcoeImage}
                    alt="DYPCOE"
                    className="img-fluid mr-3"
                    width="90"
                  />
                  <p className="mb-0 mx-4">
                    D. Y. Patil College of Engineering (DYPCOE) in Akurdi, Pune,
                    is a staunch advocate of anti-ragging. It enforces strict
                    policies, conducts awareness campaigns, and ensures a
                    secure, harassment-free environment, prioritizing students'
                    safety and well-being. DYPCOE remains committed to fostering
                    a respectful and inclusive educational atmosphere.
                  </p>
                </div>
              </div>
              <div className="px-3 py-4 shadow">
                <div className="d-flex align-items-center">
                  <img
                    src={ministryOfEducationImage}
                    alt="Ministry of Education"
                    className="img-fluid mr-3"
                    width="100"
                  />
                  <p className="mb-0 mx-4">
                    The Ministry of Education is a dedicated advocate for
                    anti-ragging efforts across educational institutions. It
                    plays a crucial role in formulating and implementing
                    anti-ragging policies, ensuring a safe and secure learning
                    environment for all students. The ministry's commitment to
                    ragging underscores its mission to promote quality education
                    while prioritizing the well-being and safety of students.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="px-3 py-4 shadow">
                <div className="d-flex align-items-center">
                  <img
                    src={nsuiImage}
                    alt="NSUI"
                    className="img-fluid mr-3"
                    width="100"
                  />
                  <p className="mb-0 mx-4">
                    The National Students' Union of India (NSUI) is actively
                    engaged in advocating for anti-ragging initiatives in
                    educational institutions. NSUI works to raise awareness and
                    enforces anti-ragging policies. NSUI promotes anti-ragging
                    campaigns in educational institutions, and making safer,
                    harassment-free campuses.
                  </p>
                </div>
              </div>
              <div className="px-3 py-4 shadow">
                <div className="d-flex align-items-center">
                  <img
                    src={psychologistImage}
                    alt="Psychologist"
                    className="img-fluid mr-3"
                    width="100"
                  />
                  <p className="mb-0 mx-4">
                    Our local psychologist is a dedicated advocate for
                    anti-ragging efforts. They provide support to victims, offer
                    guidance on coping, and actively contribute to creating a
                    safe and respectful environment in our community. Their
                    commitment to eradicating ragging underscores their mission
                    to prioritize the well-being and mental health of students
                    in our locality.Thus our psychologist is always available for the students in need and will help them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact pb-5">
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading pt-5">Contact Us</h2>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container text-black fw-bold">
          <div className="form-section mx-auto">
            <form>
              <div className="mb-3">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label
                      htmlFor="exampleInputFirstname"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputFirstname"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <label
                      htmlFor="exampleInputLastname"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputLastname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message Us
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-center text-white">
        <div className="container">
          {/* Grid container */}
          <div className="container p-4 pb-0">
            {/* Section: Social media */}
            <div className="mb-4">
              {/* Facebook */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* Twitter */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              {/* Google */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              {/* Instagram */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* LinkedIn */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              {/* Github */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            {/* Section: Social media */}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a className="text-white" href="#">
              Antiragging.com
            </a>
          </div>
          {/* Copyright */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
