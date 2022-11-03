import { Col, Divider, Row } from "antd";

const Footers = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ borderBottom: "0.5px solid #ffffffa3", padding: 0, marginBottom:'10px' }}
        >
          <ul className="navbar-nav ">
            <li className="nav-item nav-footer">
              <h5 className="h5-text-foot">About</h5>
            </li>
            <li className="nav-item nav-footer">
              <h5 className=" h5-text-foot">Carreers</h5>
            </li>
            <li className="nav-item nav-footer">
              <h5 className="h5-text-foot">Press and Media</h5>
            </li>
            <li className="nav-item nav-footer">
              <h5 className="h5-text-foot">Shopify Plus</h5>
            </li>
            <li className="nav-item nav-footer">
              <h5 className="h5-text-foot">Sitemap</h5>
            </li>
          </ul>
        </nav>
      </div>
      <Row>
        <Col
          style={{ color: "#ffffff" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 8 }}
            >
              <div>
                <strong>ONLINE STORE</strong>
                <p className="mt-1">Sell online</p>
                <p>Examples</p>
                <p>Website builder</p>
                <p>Online retail</p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 8 }}
            >
              <div className="margin-foot-menu">
                <p>Ecommerce website</p>
                <p>Domain names</p>
                <p>Shopping cart</p>
                <p>Ecommerce hosting</p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 8 }}
            >
              <div className="margin-foot-menu">
                <p> Mobile commerce</p>
                <p>Online store builder</p>
                <p>Dropshipping Business</p>
                <p>Store themes</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          style={{ color: "#ffffff" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 4 }}
        >
          <strong>POINT OF SALE</strong>
          <p className="mt-1">Point of sale</p>
          <p>Features</p>
          <p>Hardware</p>
        </Col>
        <Col
          style={{ color: "#ffffff" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 4 }}
        >
          <strong>SUPPORT</strong>
          <p className="mt-1">24/7 support</p>
          <p>Shopify Help Center</p>
          <p>Shopify Community</p>
          <p>API documentation</p>
          <p>Free tools</p>
          <p>Free stock photos</p>
          <p>Websites for sale</p>
          <p>Logo Maker</p>
          <p>Business name generator</p>
          <p>Research</p>
          <p>Legal</p>
        </Col>
        <Col
          style={{ color: "#ffffff" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 4 }}
        >
          <strong>SHOPIFY</strong>
          <p className="mt-1">Contact</p>
          <p>Partner program</p>
          <p>Affiliate program</p>
          <p>App developers</p>
          <p>Investors</p>
          <p>Blog topics</p>
          <p>Community Events</p>
          <p>Fulfillment</p>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          icon
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          link
        </Col>
      </Row>
    </>
  );
};

export default Footers;
