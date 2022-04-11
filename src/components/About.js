import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About us</h1>
            <p className="lead mb-4">
              The iPhone continues to be the most popular smartphone in the
              United States by some measure, analysts claim, with Apple
              dominating the market throughout 2021. The United States is one of
              the most popular markets for the iPhone range, with it being a
              reliable major source of Apple's overall revenue. In analysis by
              Counterpoint Research, it appears that Apple practically consumed
              over half of the market for most of the last four quarters. Data
              from the firm covering all of 2021 put Apple as holding just over
              50% of smartphone shipments from Q1 2021 to Q4 2021. The year
              started with 55% of the market for Q1, amid a market that was
              growing 14% year-on-year.
            </p>
            <NavLink to="/contact" className="btn btn-primary px-3">
              Contact us
            </NavLink>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.png" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
