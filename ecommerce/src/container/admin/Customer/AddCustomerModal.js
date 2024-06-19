import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCustomerModal = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image")) {
      setImg(file);
      setPreview(URL.createObjectURL(file));
    } else {
      console.error("Invalid file selected.");
      toast.error("Please select a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("img", img);
      formData.append("gender", gender);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);

      await axios.post("http://localhost:8000/api/addcustomer", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product added successfully!");
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add product. Please try again!");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Thêm khách hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên khách hàng"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Giới tính
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Nhập giới tính"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Nhập địa chỉ"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 mt-2">
                  <label htmlFor="img" className="form-label"></label>
                  <input
                    type="file"
                    className="form-control"
                    id="img"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                  <div
                    className="file-input-frame"
                    style={{
                      width: "auto",
                      height: "500px",
                      border: "2px dashed #ccc",
                      borderRadius: "5px",
                      cursor: "pointer",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={handleButtonClick}
                  >
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    ) : (
                      <div className="file-input-label">
                        Please Choose File Image
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <Button variant="primary" type="submit">
                Thêm khách hàng
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCustomerModal;
