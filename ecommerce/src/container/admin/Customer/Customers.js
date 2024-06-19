import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../../components/admin/HeaderAdmin";
import Navbar from "../../../components/admin/Navbar";
import axios from "axios";
import { Button } from "react-bootstrap";
import AddCustomerModal from "./AddCustomerModal";
import EditCustomerModal from "./EditCustomerModal";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const Customers = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/getcustomer");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get("term");

    if (term) {
      setSearchTerm(term);
      searchCustomers(term);
    } else {
      setSearchTerm("");
      fetchData();
    }
  }, [location.search]);

  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleUpdate = (customer) => {
    setSelectedCustomer(customer);
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedCustomer(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/deletecustomer/${id}`);
      toast.success("Xóa khách hàng thành công!");
      setCustomers(customers.filter((customer) => customer.id !== id));
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xóa thất bại hãy thử lại!");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/customers?term=${searchTerm.trim()}`);
      searchCustomers(searchTerm.trim());
    } else {
      navigate("/customers");
    }
  };

  const searchCustomers = async (term) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/searchcustomer?search=${term}`);
      setCustomers(response.data);
    } catch (error) {
      console.error("Error searching customers:", error);
      toast.error("Lỗi khi tìm kiếm khách hàng, vui lòng thử lại!");
    }
  };

  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        {/* Sidebar Start */}
        <aside className="left-sidebar" style={{ backgroundColor: "darkgray" }}>
          {/* Sidebar scroll*/}
          <div>
            {/* Sidebar navigation*/}
            <Navbar />
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <HeaderAdmin />
          {/*  Header End */}
          <div className="container-fluid">
            <div className="container-fluid">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <h5 className="card-title fw-semibold mb-4">Khách hàng</h5>
                    </div>
                    <div className="col-4">
                      <form onSubmit={handleSearch}>
                        <div className="input-group float-center">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Tìm kiếm..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="btn btn-primary shadow-0"
                          >
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-2" style={{ marginLeft: "-28px" }}>
                      {/* No specific button needed here */}
                    </div>
                    <div className="col-2 text-end">
                      <Button variant="primary" onClick={handleAdd}>
                        Thêm Khách Hàng
                      </Button>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Tên khách hàng</th>
                        <th scope="col">Ảnh khách hàng</th>
                        <th scope="col">Email khách hàng</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer) => (
                        <tr key={customer.id}>
                          <td>{customer.name}</td>
                          <td>
                            <img
                              src={`http://localhost:8000/customer/${JSON.parse(
                                customer.img
                              )}`}
                              className="img-fluid product-thumbnail"
                            />
                          </td>
                          <td>{customer.email}</td>
                          <td>{customer.phone}</td>
                          <td>{customer.address}</td>
                          <td>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                              onClick={() => handleUpdate(customer)}
                              style={{ cursor: "pointer" , color: "blue"}}
                            >
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path
                                fillRule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                              />
                            </svg>
                          </td>
                          <td>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                              onClick={() => handleDelete(customer.id)}
                              style={{ cursor: "pointer", color: "red" }}
                            >
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddCustomerModal
        show={isAddModalOpen}
        handleClose={handleCloseAddModal}
      />
      <EditCustomerModal
        show={isUpdateModalOpen}
        handleClose={handleCloseUpdateModal}
        customer={selectedCustomer}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default Customers;
