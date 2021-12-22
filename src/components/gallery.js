import React from "react";
import {Accordion} from "react-bootstrap";

const Gallery = () => {
  return (
    // <div className="d-flex justify-content-center gallery">
    //   <div className="gallery-img">
    //     <img src="./images/Preview_A.jpg" alt="" />
    //   </div>
    //   <div className="gallery-img">
    //     <img src="./images/Preview_B.jpg" alt="" />
    //   </div>
    //   <div className="gallery-img">
    //     <img src="./images/Preview_C.jpg" alt="" />
    //   </div>
    //   <div className="gallery-img">
    //     <img src="./images/Preview_D.jpg" alt="" />
    //   </div>
    //   <div className="gallery-img">
    //     <img src="./images/Preview_E.jpg" alt="" />
    //   </div>
    //   <div className="gallery-img">
    //     <img src="./images/Preview_F.jpg" alt="" />
    //   </div>    
    //   <div className="gallery-img">
    //     <img src="./images/Preview_G.jpg" alt="" />
    //   </div>
    //   <div className="gallery-img">
    //     <img src="./images/Preview_H.jpg" alt="" />
    //   </div>
    //   <div className="gallery-img">
    //     <img src="./images/Preview_I.jpg" alt="" />
    //   </div>
    // </div>
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Gallery;