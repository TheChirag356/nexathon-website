import React from "react";

const ProblemStatementsPage = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <p id="logo">Voxel</p>
          <button>Download now</button>
        </nav>

        <section className="intro"></section>
        <section className="steps">
          <div className="step-counter">
            <div className="counter-title">
              <h1>Steps</h1>
            </div>
            <div className="count">
              <div className="count">
                <h1>01</h1>
                <h1>02</h1>
                <h1>03</h1>
                <h1>04</h1>
                <h1>05</h1>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-img">
                <img src="" alt="" />
              </div>
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, numquam?</p>
              </div>
            </div>
          </div>
        </section>
        <section className="outro"></section>
      </div>
    </div>
  );
};

export default ProblemStatementsPage;
