import React from "react";
import "antd/dist/antd.css";
import { HeaderWrapper } from "./style";
import {
  MenuOutlined,
  RetweetOutlined,
  HeartOutlined,
  ShoppingOutlined,
  DownOutlined,
  UserOutlined,
  AudioOutlined,
  SearchOutlined,
  AudioFilled,
} from "@ant-design/icons";
import { Dropdown, Input, Menu, Space, Typography } from "antd";
import { BrowserRouter as Link } from "react-router-dom";
const { Search } = Input;

const menu = (
  <Menu
    selectable
    withDirectives
    items={[
      {
        key: "1",
        label: "Item 1",
      },
      {
        key: "2",
        label: "Item 2",
      },
      {
        key: "3",
        label: "Item 3",
      },
    ]}
  />
);

const Header = () => {
  const onSearch = (value) => console.log(value);
  const suffix = (
    <Dropdown overlay={menu} placement="bottom">
      <Typography.Link>
        <Space>
          All Categories
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );

  return (
    <>
      <HeaderWrapper>
        <div className="header-container">
          <div className="header-icon">
            <MenuOutlined />
          </div>
          <div className="navbar">
            <div className="navbar-search">
              <Search
                placeholder="Search for products"
                suffix={suffix}
                onSearch={onSearch}
                enterButton
              />
            </div>
            <div className="navbar-items">
              <ul>
                <li className="font-face-rg">
                  <Link>SuperDeals</Link>
                </li>
                <li className="font-face-rg">
                  <Link>Top 10 Printers</Link>
                </li>
                <li className="font-face-rg">
                  <Link>Trending</Link>
                </li>
                <li>
                  <RetweetOutlined />
                </li>
                <li>
                  <div className="shopping">
                    <ShoppingOutlined />
                    <span className="shopping-num">4</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-mobile">
            <div className="navbar-items">
              <ul>
                <li>
                  <UserOutlined />
                </li>
                <li>
                  <div className="shopping">
                    <ShoppingOutlined />
                    <span className="shopping-num">4</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-search-mobile">
          <Search
            placeholder="Search for products"
            suffix={
              <AudioFilled
                style={{
                  fontSize: 16,
                  color: "#707070",
                }}
                enterButton
              />
            }
          />
          <SearchOutlined />
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
