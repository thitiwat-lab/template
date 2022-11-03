import { Card, Col, Row , Image} from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useMediaQuery } from "@/composable/use-mobile-app";

const ContendCustomer = () => {
  const { isMobile } = useMediaQuery();
  return (
    <div>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
          className={!isMobile?'order-0':'order-1'}
        >
          <div className="d-flex justify-content-center">
            <Card style={{ width: 500, background: "#f0f2f5" }}>
              <h1>Connect with customers everywhere</h1>
              <p>
                Sell online, in person, or both with the marketing tools, social
                integrations, and sales channels you need to get your products
                in front of customers—and out the door.
              </p>
              <strong style={{ color: "#008060" }}>
                Marketing made easy <ArrowRightOutlined />
              </strong>
            </Card>
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <div className="sell__image-container sell-img-contend"> 
          <Image
            width={'80%'}
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-small-a7aadbd394716dd8df2b1959769a24827ac97161b67013f4926bb0dee7133ee9.png"
          />
          </div>
          {/* <img
            alt="An illustration of an online sunglasses store. The image is surrounded by emojis and icons for sales channels including Instagram, TikTok, Shop, and Google."
            data-sizes="100vw"
            data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-small-a7aadbd394716dd8df2b1959769a24827ac97161b67013f4926bb0dee7133ee9.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-large-b1d708a1d1b26bb0e8f42fea19b248f453e532f0c552f85603e1f26f783c711c.png?quality=50 2x"
            class=" lazyloaded"
            sizes="100vw"
            srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-small-a7aadbd394716dd8df2b1959769a24827ac97161b67013f4926bb0dee7133ee9.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sell-large-b1d708a1d1b26bb0e8f42fea19b248f453e532f0c552f85603e1f26f783c711c.png?quality=50 2x"
          ></img> */}
        </Col>
      </Row>
    </div>
  );
};
export default ContendCustomer;
