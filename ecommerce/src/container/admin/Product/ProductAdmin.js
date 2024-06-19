import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../../components/admin/HeaderAdmin";
import Navbar from "../../../components/admin/Navbar";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Define fetchData outside useEffect
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/getproducts");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get("term");

    if (term) {
      setSearchTerm(term);
      searchProducts(term);
    } else {
      setSearchTerm("");
      fetchData();
    }
  }, [location.search]);

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/productadmin?term=${searchTerm.trim()}`);
    } else {
      navigate("/productadmin");
    }
  };

  const searchProducts = async (term) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/productadmin?search=${term}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
      toast.error("Lỗi khi tìm kiếm sản phẩm, vui lòng thử lại!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`);
      toast.success("Product deleted successfully!");
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to delete product. Please try again!");
    }
  };
  console.log(products);
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
                      <h5 className="card-title fw-semibold mb-4">Sản phẩm</h5>
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
                    <div className="col-4 text-end">
                      <Button variant="primary" onClick={handleAdd}>
                        Thêm Sản Phẩm
                      </Button>
                    </div>
                  </div>

                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Img</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td scope="row">
                            <span className="spanadmin">{product.id}</span>
                          </td>
                          <td>
                            <span className="spanadmin">{product.name}</span>
                          </td>
                          <td>
                            {product.img && product.img.length > 0 && (
                              <img
                                src={`http://localhost:8000/${
                                  JSON.parse(product.img)[0]
                                }`}
                                className="img-fluid product-thumbnail"
                              />
                            )}
                          </td>
                          <td>
                            <span className="spanadmin">
                              {" "}
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(product.price)}
                            </span>
                          </td>
                          <td>
                            <span className="spanadmin">
                              {product.quantity}
                            </span>
                          </td>
                          <td>
                            <span className="spanadmin">
                              {product.description}
                            </span>
                          </td>
                          <td>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                              onClick={() => handleUpdate(product)}
                              style={{ cursor: "pointer", color: "blue" }}
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
                              onClick={() => handleDelete(product.id)}
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
      <AddProductModal
        show={isAddModalOpen}
        handleClose={handleCloseAddModal}
      />
      <EditProductModal
        show={isUpdateModalOpen}
        handleClose={handleCloseUpdateModal}
        product={selectedProduct}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default ProductAdmin;
