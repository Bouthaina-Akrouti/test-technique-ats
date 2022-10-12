import { Menu, Layout } from "antd";
import React from "react";
import { TitleMenu } from '../styled'

const { Sider } = Layout;

const SidebarLeft = () => {
  const items2 = [
    {
      key: "sub1",
      label: "Value of the Day",
    },
    {
      key: "sub2",
      label: "Top 100 Offers",
    },
    {
      key: "sub3",
      label: "New arrivals",
    },
    {
      key: "sub4",
      label: "Laptops & Computers",
      children: [
        {
          key: 1,
          label: "option1",
        },
        {
          key: 2,
          label: "option2",
        },
        {
          key: 3,
          label: "option3",
        },
        {
          key: 4,
          label: "option4",
        },
      ],
    },
    
    {
        key: "sub5",
        label: "Cameras & Photography",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      },
      
    {
        key: "sub6",
        label: " Smart Phones & Tablets",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      },
      {
        key: "sub7",
        label: " Video Games & Consoles",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      },
      {
        key: "sub8",
        label: "TV & Audio",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      },
      {
        key: "sub9",
        label: " Gadgets",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      },
      {
        key: "sub10",
        label: "Car Electronic & GPS",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      },
      {
        key: "sub11",
        label: "Printers & Inks",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      },
      {
        key: "sub12",
        label: "Portable Audio",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      },
      {
        key: "sub13",
        label: "Accesories",
        children: [
          {
            key: 1,
            label: "option1",
          },
          {
            key: 2,
            label: "option2",
          },
          {
            key: 3,
            label: "option3",
          },
          {
            key: 4,
            label: "option4",
          },
        ],
      }
  ];
  return (
    <>
      <Sider width={250} className="site-layout-background">
        <TitleMenu>
            <span>Departments</span>
            <span>View all</span>
        </TitleMenu>
        <Menu
          mode="inline"
          style={{ height: "100%", borderRight: 0 }}
          items={items2}
        />
      </Sider>
    </>
  );
};

export default SidebarLeft;
