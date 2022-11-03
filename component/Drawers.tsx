import { Drawer, Divider, Collapse } from "antd";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Drawers = (props: Props) => {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const onCloses = () => {
    props.onClose();
  };

  return (
    <Drawer placement="right" onClose={onCloses} open={props.open}>
      <Collapse accordion ghost expandIconPosition="end">
        <Panel header="Start" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Sell" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="Market" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="Manage" key="4">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Divider />
      <span style={{ paddingLeft: "16px" }}>Pricing</span>
      <Collapse accordion ghost expandIconPosition="end">
        <Panel header="Learn" key="5">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <button type="button" className="custom-login-buttom mt-4">
        Log in
      </button>
      <button type="button" className="custom-free-buttom mt-4">
        Start free trial
      </button>
      <Divider />
      <p>About</p>
      <p>Careers</p>
      <p>Press and Media</p>
      <p>Shopify Plus</p>
      <p>Sitemap</p>
    </Drawer>
  );
};

export default Drawers;
