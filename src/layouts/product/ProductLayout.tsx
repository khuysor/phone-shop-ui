import { Col, Row } from "antd";

function ProductLayout() {
  return (
    <Row>
      <Col span={12}>
        Navbar
      </Col>
      <Col span={12}>
        Content
      </Col>
    </Row>
  );
}

export default ProductLayout;
