import Headers from "./header";
import { Layout } from "antd";
import Contend from "./contend";
import Footers from "./footer";
const Contents = () => {
  const { Footer, Content } = Layout;
  return (
    <Layout>
        <Headers />
      <Content style={{ marginRight: 0 }}>
        <Contend />
      </Content>
      <Footer style={{ background: " #002e25", color: "#ffffff" }}>
        <Footers />
      </Footer>
    </Layout>
  );
};

export default Contents;
