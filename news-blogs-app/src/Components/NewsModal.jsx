import React from "react";
import demoImg from "../assets/images/demo.jpg";

const NewsModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={demoImg} alt="Modal Image" className="modal-image" />
        <h2 className="modal-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
          nobis?
        </h2>
        <p className="modal-source">Source: The Guardian</p>
        <p className="modal-date">Jun 24, 2024, 04:15PM</p>
        <p className="modal-content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat
          dolorem officia animi? Voluptatem, exercitationem ea iure esse dolorum
          autem dolor explicabo perferendis vel, accusamus dolorem eos minima
          voluptatum debitis sapiente? Optio modi cumque maiores!
        </p>
        <a href="#" className="read-more-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsModal;
