import { Button, Col } from "antd";

const ContendStartFree = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Col>
          <div className="d-flex justify-content-center p-1">
            <h1>Grow your business here</h1>
          </div>
          <h5 className="p-2">
            Whether you want to sell products down the street or around the
            world, we have all the tools you need.
          </h5>
          <div className="d-flex justify-content-center pb-5 pt-2">
            <Button
              size="large"
              style={{
                backgroundColor: "#008060",
                border: "1px solid #008060",
                color: "#ffffff",
              }}
            >
              Start free trial
            </Button>
          </div>
        </Col>
      </div>
    </>
  );
};

export default ContendStartFree;
