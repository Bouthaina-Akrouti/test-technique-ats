import { Layout, Button, Card } from "antd";
import React from "react";
import { RightCircleFilled } from "@ant-design/icons";

const { Sider } = Layout;

const SidebarRight = () => {
  return (
    <>
      <Sider width={250} className="site-layout-background">
      <Card className="card-content-block-right">
            <div>
                <h3 className="dark-color">CATCH BIG <span>DEALS</span> ON THE CONSOLES</h3>
            </div>
            <div>
                <Button type="link" block>Shop now <RightCircleFilled /></Button>
            </div>
        </Card>
        <Card className="card-content-block-right">
            <div>
                <h3 className="dark-color">SHOP THE <span>HOTTEST</span> PRODUCTS</h3>
            </div>
            <div>
                <Button type="link" block>Shop now <RightCircleFilled /></Button>
            </div>
        </Card>
        <Card className="card-content-block-right">
            <div>
                <h3 className="dark-color">LAPTOPS, NOTEBOOKS <span>AND MORE</span></h3>
            </div>
            <div>
                <Button type="link" block>Shop now <RightCircleFilled /></Button>
            </div>
        </Card>
      </Sider>
    </>
  );
};

export default SidebarRight;
