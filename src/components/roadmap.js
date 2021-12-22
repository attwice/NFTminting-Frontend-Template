import React, { useEffect } from "react";
import WebFont from 'webfontloader';
import {
  Row,
  Col,
  Container,
  Card,
  ProgressBar
} from "react-bootstrap";

const Roadmap = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Purple Purse', 'Roboto']
      }
    });
  }, []);

  return (
    // <div className="roadmap-container purple-text">
    //   <div className="roadmap-header text-center" id="roadmap">
    //     Roadmap
    //   </div>    
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       October 2021
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text text-center position-absolute">
    //         Artwork Development<br />
    //         Website Launch<br />
    //         Social Media Launch
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       November 2021
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text text-center position-absolute">
    //         Artwork published<br />
    //         Minting accessible<br />
    //         10 Dirty Donkeys Giveaway at 10% minted<br />
    //         St.Judes Charity Wallet Created
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       December 2021
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text text-center position-absolute">
    //         Top holder will get custom NFT<br />
    //         Art competition for Prizes<br />
    //         Interviews for new Dirty Donkey team members<br />
    //         New website development
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       January 2022
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text roadmap-text2 text-center position-absolute">
    //         Dirty Donkey Merchandise store???<br />
    //         To Be Announced
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       February 2022
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text roadmap-text1 text-center position-absolute">
    //         To Be Announced
    //       </div>
    //     </div>
    //   </div>
    //   <div className="roadmap-panel mb-3 mb-sm-4">
    //     <div className="roadmap-title text-center">
    //       March 2022
    //     </div>
    //     <div className="position-relative roadmap-text-height">
    //       <div className="roadmap-text roadmap-text1 text-center position-absolute">            
    //         To Be Announced
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Container>
        <Row>
          <Col md={5}>
            <Card border="primary" style={{ width: '100%' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <ProgressBar variant="success" animated now={75} />
          </Col>
          <Col md={{ span: 5, offset: 2 }}></Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col md={{ span: 5, offset: 2 }}>
            <Card border="secondary" style={{ width: '100%' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <ProgressBar variant="info" animated now={55} />
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Card bg="success" style={{ width: '100%' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <ProgressBar variant="warning" animated now={35} />
          </Col>
          <Col md={{ span: 5, offset: 2 }}></Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col md={{ span: 5, offset: 2 }}>
            <Card bg="dark" variant="dark" style={{ width: '100%' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <ProgressBar variant="danger" animated now={15} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Roadmap;