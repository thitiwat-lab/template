import { Col, Image, Row } from "antd";
const ContendWorld = () => {
  return (
    <div style={{ backgroundColor: "#f3fcf4", padding:'20px' }}>
      <Image
        width={"100%"}
        preview={false}
        src="https://cdn.shopify.com/shopifycloud/brochure/assets/modules/map/map-fallback-small-cc55c939983003e5218ed07f624c0e0a10c844dc57367730288845c451b35e86.png"
      />
      <div className="mt-3">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 10, offset: 2 }}
          >
            <div className="d-flex">
              <div>
                <h1>Millions</h1>
                <h5>of merchants worldwide</h5>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h1>175</h1>
                <h5>countries on Shopify</h5>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 10, offset: 2 }}
          >
            <div className="d-flex">
              <div>
                <h1>5M</h1>
                <h5>jobs supported in 2021</h5>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h1>$444B+</h1>
                <h5>global economic activity</h5>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContendWorld;
