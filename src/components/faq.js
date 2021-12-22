import React from "react";
import {Accordion} from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faq-container purple-text">
      <div className="faq-header text-center" id="faq">
        FAQ
      </div>
      <div className="faq-text px-2 px-md-4">
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Q:What are Dirty Donkeys?</Accordion.Header>
          <Accordion.Body>
            A: Dirty Donkeys are Non-Fungible Tokens (NFTs), unique digital assets that can take the form of artwork and provide utility to holders.
            Dirty Donkeys stand apart with a focus on making people put a smile on their faces.
            This allows the team and entire community to help those in need and create more products for our community.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Q:How can I purchase a Dirty Donkey?</Accordion.Header>
          <Accordion.Body>
            A:Click the mint tab at the top of the website. Then connect your wallet and click mint on the amount you want to mint.
            The minting dialog allows you to mint up to 20 Dirty Donkeys at a time.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;