import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditCustomerModal = ({
  show,
  handleClose,
  customer = {},
  handleUpdate,
}) => {
  const [editedName, setEditedName] = useState("");
  const [editedImg, setEditedImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editedGender, setEditedGender] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [editedAddress, setEditedAddress] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (customer) {
      setEditedName(customer.name || "");
      setPreview(customer.img || "");
      setEditedGender(customer.gender || "");
      setEditedEmail(customer.email || "");
      setEditedPhone(customer.phone || "");
      setEditedAddress(customer.address || "");
    }
  }, [customer]);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image")) {
      setEditedImg(file);
      setPreview(URL.createObjectURL(file));
    } else {
      console.error("Invalid file selected.");
      toast.error("Please select a valid image file.");
    }
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", editedName);
      formData.append("gender", editedGender);
      formData.append("email", editedEmail);
      formData.append("phone", editedPhone);
      formData.append("address", editedAddress);

      if (editedImg) {
        formData.append("img", editedImg);
      }
      else {
        formData.append("existing_img", customer.img);
      }

      await axios.post(
        `http://localhost:8000/api/updatecustomer/${customer.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Product updated successfully!");
      handleClose();
      handleUpdate(customer.id, {
        ...customer,
        name: editedName,
        img: editedImg ? URL.createObjectURL(editedImg) : preview,
        gender: editedGender,
        email: editedEmail,
        phone: editedPhone,
        address: editedAddress,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to update product. Please try again!");
    }
  };

  const isBlobUrl = (url) => url.startsWith("blob:");


  return (
    <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa khách hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmitEdit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="editedName" className="form-label">
                  Tên Khách hàng
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editedName"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Nhập tên khách hàng"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editedGender" className="form-label">
                  Giới tính
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editedGender"
                  value={editedGender}
                  onChange={(e) => setEditedGender(e.target.value)}
                  placeholder="Nhập giới tính"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editedEmail" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editedEmail"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  placeholder="Nhập email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editedPhone" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editedPhone"
                  value={editedPhone}
                  onChange={(e) => setEditedPhone(e.target.value)}
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editedAddress" className="form-label">
                  Địa chỉ khách hàng
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editedAddress"
                  value={editedAddress}
                  onChange={(e) => setEditedAddress(e.target.value)}
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
                    isBlobUrl(preview) ? (
                      <img
                        src={preview}
                        alt="Preview"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    ) : (
                      <img
                      src={`http://localhost:8000/customer/${
                        JSON.parse(preview)
                      }`}
                        alt="Preview"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    )
                  ) : (
                    <div className="file-input-label">
                      Please Choose File Image
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditCustomerModal;
