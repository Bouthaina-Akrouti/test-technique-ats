import { Button, Card, Divider } from "antd";
import React from "react";

const CardPromos = (props) => {
  const { item, title } = props;
  return (
    <>
      <Card title={title}>
        <div className="content-card">
          <h3 className="font-face-bold">{item.title}</h3>
          <div className="logo">
            <img
              src={require("../../../assets/placeholder.png")}
              width="170"
              height="170"
            />
          </div>
          <div className="footer-card">
            <p
              className={`price-product danger-color`}
            >
              ${item.price}
            </p>
            {item.oldPrice && (
              <span className="old-price-product">${item.oldPrice}</span>
            )}
          </div>
        </div>
        <Divider type="vertical" />
      </Card>
    </>
  );
};

export default CardPromos;
