import { Card, Col, Row, Image } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
const ContendProduct = () => {
  return (
    <div>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <div className="product-img-contend">
            <Image
              width={"90%"}
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/manage-small-6b3e63485d8e7fda3a9b55feae5f234056786d870d0152d308a75b1debd3bace.png"
            />
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <div className="d-flex justify-content-center">
            <Card style={{ width: 500, background: "#f0f2f5" }}>
              <h1>Everything you need to succeed</h1>
              <p>
                Manage inventory, track payments, and view real-time business
                insights from a single dashboard. We’ve built all the tools you
                need, so you can focus on building your business.
              </p>
              <strong style={{ color: "#008060" }}>
                Do more from day one <ArrowRightOutlined />
              </strong>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContendProduct;
