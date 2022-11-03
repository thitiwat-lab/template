import { Card, Carousel, Col, Row } from "antd";
import {ArrowRightOutlined} from '@ant-design/icons';
const ContendPromote = () => {
  const contentStyle: React.CSSProperties = {
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <div className="p-carousel">
        <Carousel>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
        </Carousel>
      </div>
      <div className="mb-3">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <div className="d-flex justify-content-center p-1">
              <Card style={{ width: 400, background: "#f0f2f5" }}>
                <h3>Store builder</h3>
                <p>
                  Bring your vision to life with our easy-to-use store creator.
                  No coding expertise required—just your next big idea.
                </p>
                <strong style={{color:'#008060'}}>Build the brand you want <ArrowRightOutlined /></strong>
              </Card>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <div className="d-flex justify-content-center p-1">
              <Card style={{ width: 400, background: "#f0f2f5" }}>
                <h3>Themes</h3>
                <p>
                  Select from hundreds of customizable templates crafted by a
                  community of world-class designers.
                </p>
                <strong style={{color:'#008060'}}>Explore more Themes <ArrowRightOutlined /></strong>
              </Card>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <div className="d-flex justify-content-center p-1">
              <Card style={{ width: 400, background: "#f0f2f5" }}>
                <h3>App store</h3>
                <p>
                  Add more features and functionality to your online store with
                  app extensions from trusted Shopify partners.
                </p>
                <strong style={{color:'#008060'}}>There’s an app for that <ArrowRightOutlined /></strong>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContendPromote;
