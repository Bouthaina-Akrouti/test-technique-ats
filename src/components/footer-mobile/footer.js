import React from "react";
import { FooterWrapper } from "./styled";
import { Collapse } from "antd";
import FontAwesome from "react-fontawesome";
import { FacebookFilled, HeartFilled, InstagramOutlined, LinkedinFilled, YoutubeFilled } from "@ant-design/icons";

const { Panel } = Collapse;

const FooterMobile = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <FooterWrapper>
        <div className="footer-container">
          <Collapse onChange={onChange}>
            <Panel header="My Account" key="1">
              <ul>
                <li className="dark-color font-face-rg">Item 1</li>
                <li className="dark-color font-face-rg">Item 2</li>
                <li className="dark-color font-face-rg">Item 3</li>
                <li className="dark-color font-face-rg">Item 4</li>
              </ul>
            </Panel>
            <Panel header="Customer Care" key="2">
              <ul>
                <li className="dark-color font-face-rg">Item 1</li>
                <li className="dark-color font-face-rg">Item 2</li>
                <li className="dark-color font-face-rg">Item 3</li>
                <li className="dark-color font-face-rg">Item 4</li>
              </ul>
            </Panel>
            <Panel header="About Us" key="3">
              <ul>
                <li className="dark-color font-face-rg">Item 1</li>
                <li className="dark-color font-face-rg">Item 2</li>
                <li className="dark-color font-face-rg">Item 3</li>
                <li className="dark-color font-face-rg">Item 4</li>
              </ul>
            </Panel>
          </Collapse>
          <div className="footer-social-media-section">
                <FacebookFilled />
                <LinkedinFilled />
                <InstagramOutlined />
                <FontAwesome name="pinterest" />
                <YoutubeFilled />
                <HeartFilled />
          </div>
        </div>
        <div className="footer-bottom">
            <p className=" font-face-light">Got questions? <span> Call us 24/7!</span></p>
            <h4>(800) 8001-8588</h4>
        </div>
      </FooterWrapper>
    </>
  );
};

export default FooterMobile;
