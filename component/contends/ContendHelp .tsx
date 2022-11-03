import { useMediaQuery } from "@/composable/use-mobile-app";
import { Col, Row, Image } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const ContendHelp = () => {
  const { isMobile } = useMediaQuery();
  return (
    <div
      style={{
        backgroundColor: "#fbf7ed",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
          className={!isMobile ? "order-0" : "order-1"}
        >
          <div>
            <h1 className="contend-two-text">
              The help you need, when you need it
            </h1>
            <div className="contend-help">
              <Col offset={1}>
                <div className="mb-2">
                  <h2>Shopify Blog</h2>
                  <h5>
                    Get all the marketing and business strategy tips you need to
                    help you run an online business. Read
                  </h5>
                  <strong style={{ color: "#008060" }}>
                    Read <ArrowRightOutlined />
                  </strong>
                </div>
                <div className="mb-2">
                  <h2>Our Community</h2>
                  <h5>
                    Connect with a community of brands, partners, and fellow
                    merchants who understand Shopify.
                  </h5>
                  <strong style={{ color: "#008060" }}>
                    Connect <ArrowRightOutlined />
                  </strong>
                </div>
              </Col>
              <Col offset={1}>
                <div className="mb-2">
                  <h2>Online Courses</h2>
                  <h5>
                    Get all the marketing and business strategy tips you need to
                    help you run an online business. Read
                  </h5>
                  <strong style={{ color: "#008060" }}>
                    Learn
                    <ArrowRightOutlined />
                  </strong>
                </div>
                <div className="mb-2">
                  <h2>Help Center</h2>
                  <h5>
                    Find answers in a flash with your dedicated resource for
                    articles and videos from our Support team.
                  </h5>
                  <strong style={{ color: "#008060" }}>
                    Get Help <ArrowRightOutlined />
                  </strong>
                </div>
              </Col>
            </div>
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <Image
            width={"100%"}
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/help-desktop-small-ac17139030bd6ceb35da7e7c39764c3b567db454a8bdc23ea305d2e93aad28ef.jpg"
          />
        </Col>
      </Row>
    </div>
  );
};
export default ContendHelp;
