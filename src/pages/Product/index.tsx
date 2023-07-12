import { PageContainer,ProTable } from "@ant-design/pro-components";
import { Button,Col,Row } from "antd";

const Product = () => {
  return (
    <PageContainer>
      <Row justify='end'>
        <Col>
          <Button type='primary'>Create a Product</Button>
        </Col>
      </Row>
      <br />

      <ProTable
        headerTitle='Products'
        columns={[
          { title: "Product Name" },
          { title: "Description" },
          { title: "Price" },
          { title: "Quantity" },
        ]}
        search={false}
      />
    </PageContainer>
  );
};

export default Product;
