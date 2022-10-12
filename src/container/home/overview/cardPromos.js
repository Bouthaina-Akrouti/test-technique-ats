import { Button, Card, Divider } from "antd";
import React from "react";

const CardPromos = (props) => {
    const {item} = props;
    return (
        <>
            <Card title={item.category} >
                <div className="content-card">
                    <h3 className="font-face-bold">{item.title}</h3>
                    <div className="logo">
                        <img src={require('../../../assets/placeholder.png')} width="100%" height="150" />
                    </div>
                    <span className="product-promos font-face-bold">-{item.promos}%</span>
                    <div className="footer-card">
                        <div>
                            <p className={`price-product ${item.oldPrice ? 'danger-color' : 'dark-color'}`}>${item.price}</p>
                            {
                                item.oldPrice && 
                                <span className="old-price-product">${item.oldPrice}</span>
                            }
                        </div>
                        <div>
                            <Button>
                                <img src={require('../../../assets/add-to-cart.png')} width="20" height="20" />
                            </Button>
                        </div>
                    </div>
                </div>
                <Divider type="vertical" />
            </Card>
        </>
    )
}

export default CardPromos;