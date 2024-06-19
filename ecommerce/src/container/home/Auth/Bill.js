import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Alert, Table } from "react-bootstrap";
import HeaderHome from "../../../components/home/HeaderHome";
import FootterHome from "../../../components/home/FootterHome";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const Bill = () => {
  const [bills, setBills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/bills");
        const billsData = response.data;
        
        // Assuming user_id is stored in localStorage
        const userId = localStorage.getItem("userid");
        
        // Filter bills to show only those belonging to the logged-in user
        const filteredBills = billsData.filter(bill => bill.user_id === parseInt(userId));
        
        setBills(filteredBills);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching bills:", error);
        setError("Failed to load bills");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeaderHome />
      <Container
        style={{
          minHeight: "100vh",
          position: "relative",
          marginTop: "100px",
        }}
      >
        {isLoading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ThreeDots color="#007bff" height={80} width={80} />
          </div>
        ) : error ? (
          <Alert
            variant="danger"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {error}
          </Alert>
        ) : (
          <Row className="justify-content-center">
            <Col md={4}>
              <Card>
                <Card.Body className="">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <a href="/profile">Thông tin</a>
                    </li>
                    <li className="list-group-item">
                      <a href="/wishlist">Sản phẩm yêu thích</a>
                    </li>
                    <li className="list-group-item">
                      <a href="/bill">Hóa đơn</a>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Mã đơn</th>
                        <th>Tên Khách hàng</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Ngày đặt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bills.map((bill) => (
                        <tr key={bill.code}>
                          <td>{bill.order[0].code}</td>
                          <td>{bill.user.name}</td>
                          <td>{bill.total_price}</td>
                          <td>{bill.status.value}</td>
                          <td>{new Date(bill.created_at).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
      <FootterHome />
    </div>
  );
};

export default Bill;
