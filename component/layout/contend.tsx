import { Col, Row, Button, Input, Image } from "antd";
import React from "react";
import { useMediaQuery } from "../../composable/use-mobile-app";
import ContendTow from "../contends/ContendTwo";
import ContendPromote from "../contends/ContendPromote";
import ContendStartFree from "../contends/ContendStartFree";
import ContendCustomer from "../contends/ContendCustomer";
import ContendProduct from "../contends/ContendProduct";
import ContendWorld from "../contends/ContendWorld";
import ContendCarouselDetail from "../contends/ContendCarouselDetail";
import ContendHelp from "../contends/ContendHelp ";

const Contend = () => {
  const { isMobile } = useMediaQuery();

  return (
    <>
      <Row style={{ backgroundColor: "#002d2d" }}>
        <Col
          style={{ color: "#ffffff" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <div className="p-2">
            <div
              className={!isMobile ? "text-box-display" : "ext-box-displays"}
            >
              <h1 className={!isMobile ? "stong-font" : "stong-fonts"}>
                If you can dream it, you can sell it with Shopify
              </h1>
            </div>
            <div className="d-flex justify-content-center">
              <h2 style={{ color: "#ffffff" }}>
                Build your business here. Take it anywhere.
              </h2>
            </div>
            <div className="head-padding-button">
              <Row>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 16 }}
                >
                  <Input
                    size="large"
                    className="w-100"
                    placeholder="Enter your email address"
                  />
                </Col>
                <Col
                  xs={{ span: 24, offset: -1 }}
                  sm={{ span: 24, offset: -1 }}
                  md={{ span: 24, offset: -1 }}
                  lg={{ span: 6, offset: 1 }}
                >
                  <Button
                    size="large"
                    className="w-100 head-button"
                    style={{
                      backgroundColor: "#008060",
                      border: "1px solid #008060",
                      color: "#ffffff",
                    }}
                  >
                    Start free trial
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-center contend-item">
              <p style={{ color: "#ffffff" }}>
                Try Shopify free for 3 days, no credit card required. By
                entering your email, you agree to receive marketing emails from
                Shopify.
              </p>
            </div>
          </div>
        </Col>
        <Col
          style={{ color: "#ffffff" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <Image
            width={"100%"}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </Row>
      <div>
        <ContendTow />
      </div>
      <div>
        <ContendPromote />
      </div>
      <div>
        <ContendCustomer />
      </div>
      <div>
        <ContendProduct />
      </div>
      <div>
        <ContendWorld/>
      </div>
      <div>
        <ContendCarouselDetail/>
      </div>
      <div>
        <ContendHelp />
      </div>
      <div>
        <ContendStartFree />
      </div>
    </>
  );
};

export default Contend;
