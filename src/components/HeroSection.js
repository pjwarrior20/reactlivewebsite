import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section section-hero-image">
          <picture>
            <img src="./pic1.png" alt="hero image" className="hero-img " />
          </picture>
        </div>

        <div className="section section-hero-image">
          <picture>
            <img src="./pic1.png" alt="hero image" className="hero-img " />
          </picture>
        </div>

        <div className="section section-hero-data">
          <h1 className="hero-heading">An Elder Care Service Where You Can Trust!</h1>
          <p className="hero-para">
            We are on a mission 'To empower seniors to lead a happy and dignified life.' We deliver solutions to geriatric care challenges families face in metro cities.
          </p>
          <div className="button-container">
            <Button className="btn hireme-btn">
              <NavLink to="/First">hire me</NavLink>
            </Button>
            <Button className="btn hireme-btn">
              <NavLink to="/Second">second</NavLink>
            </Button>
          </div>
        </div>

        <div className="section section-hero-data">
          <h1 className="hero-heading">Another Section Heading</h1>
          <p className="hero-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet efficitur elit, at lacinia urna tincidunt non. Donec efficitur nunc vitae velit volutpat, nec auctor justo aliquam. Vestibulum eget aliquet lectus.
          </p>
          <div className="button-container">
            <Button className="btn hireme-btn">
              <NavLink to="/Third">button 1</NavLink>
            </Button>
            <Button className="btn hireme-btn">
              <NavLink to="/Fourth">button 2</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 75%;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .button-container {
    display: flex;
    gap: 10px; /* Adjust this value for spacing between the buttons */
    margin-top: 2rem;
  }

  .btn {
    max-width: 16rem;
  }
`;

export default HeroSection;
