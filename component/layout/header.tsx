import React, { useState } from "react";
import DropdownText from "../DropdownText";
import { Space, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useMediaQuery } from "../../composable/use-mobile-app";
import { MenuOutlined } from "@ant-design/icons";
import Drawers from "../Drawers";

const Headers = () => {
  const { isMobile } = useMediaQuery();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const menu = (
    <Menu
      items={[
        {
          label: "test",
          key: "0",
        },
        {
          label: "test",
          key: "1",
        },
      ]}
    />
  );

  return (
    <>
      <nav className="nav-bar">
        {!isMobile ? (
          <>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h4 className="ml-3 nav-color-text">Shopify</h4>
                <div className="d-flex">
                  <DropdownText type={"start"} />
                  <DropdownText type={"sell"} />
                  <DropdownText type={"market"} />
                  <DropdownText type={"manage"} />
                </div>
              </div>
              <div className="d-flex">
                <span className="mt-2">Pricing</span>
                <div>
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <span
                      className="d-flex mt-2"
                      style={{
                        color: "#ffffff",
                        paddingLeft: "26px",
                        paddingRight: "26px",
                      }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Space>Learn</Space>
                      <DownOutlined
                        style={{
                          fontSize: "12px",
                          marginTop: "8px",
                          marginLeft: "5px",
                        }}
                      />
                    </span>
                  </Dropdown>
                </div>
                <span className="mt-2">Log in</span>
                <button type="button" className="custom-header-buttom">
                  Start free trial
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-between">
              <h4 className="ml-3 nav-color-text">Shopify</h4>
              <MenuOutlined
                className="mt-1"
                style={{ fontSize: "26px" }}
                onClick={showDrawer}
              />
            </div>
          </>
        )}
      </nav>

      <Drawers open={open} onClose={onClose} />
    </>
  );
};

export default Headers;
