import React from "react";
import "./domains.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Domains = () => {
  return (
    <section id="domains">
      <h5>What Domains We Focus</h5>
      <h2>Our Focus Areas</h2>

      <div className="container domains__container">
        <div className="domains__frontend">
          {/* <h3>UI/UX Designer</h3> */}
          <div className="domains__content">
            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />
              <div>
                <h4>Engineering</h4>
              </div>
            </article>

            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />

              <div>
                <h4>Management</h4>
              </div>
            </article>

            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />

              <div>
                <h4>Law</h4>
              </div>
            </article>

            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />

              <div>
                <h4>Food Tech</h4>
              </div>
            </article>
            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />
              <div>
                <h4>Agriculture</h4>
              </div>
            </article>

            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />
              <div>
                <h4>Hotel Management</h4>
              </div>
            </article>

            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />
              <div>
                <h4>Architecture</h4>
              </div>
            </article>
            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />
              <div>
                <h4>Arts</h4>
              </div>
            </article>
            <article className="domains__details">
              <BsFillPatchCheckFill className="domains__details-icons" />
              <div>
                <h4>Fashion Design</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
