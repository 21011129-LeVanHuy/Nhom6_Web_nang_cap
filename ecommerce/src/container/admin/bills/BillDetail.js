import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BillDetail = ({ billId }) => {
  const [bill, setBill] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchBillDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/billdetail/${billId}`
        );
        setBill(response.data);
        setSelectedStatus(response.data[0].checkout.orderstatus_id.toString()); // Set selected status when bill data is fetched
      } catch (error) {
        console.error("Error fetching bill details:", error);
      }
    };

    fetchBillDetail();
  }, [billId]);

  const handleStatusChange = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/updatestatus/${billId}`,
        {
          status: selectedStatus,
          order_id: billId,
        }
      );
      toast.success("Cap nhap trang thai thanh cong");
      window.location.reload();
      console.log("Status updated successfully:", response.data);
    } catch (error) {
      toast.error("Cap nhap trang thai that bai");

      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getstatus");
        setStatus(response.data);
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    };

    fetchData();
  }, []);

  console.log(selectedStatus);

  if (bill.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Mã đơn hàng:</th>
                <td>{bill[0].code}</td>
              </tr>
              <tr>
                <th scope="row">Ngày mua:</th>
                <td>{bill[0].created_at}</td>
              </tr>
              <tr>
                <th scope="row">Tổng giá trị đơn hàng:</th>
                <td>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(bill[0].checkout.total_price)}
                </td>
              </tr>
              <tr>
                <th scope="row">Trạng thái đơn hàng:</th>
                <td>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    {status.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary ms-2"
                    onClick={handleStatusChange}
                  >
                    Cập nhật
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h3>Danh sách sản phẩm</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ width: "400px" }}>
                  Tên sản phẩm
                </th>
                <th scope="col">Ảnh sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {bill.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={`http://localhost:8000/${JSON.parse(item.img)[0]}`}
                      className="card-img-top"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.total_price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillDetail;