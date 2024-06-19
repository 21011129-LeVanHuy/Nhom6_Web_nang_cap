import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStaffsModal = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [preview, setPreview] = useState(null);

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
      formData.append("position", position);

      await axios.post("http://localhost:8000/api/addstaffs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Staff added successfully!");
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add staff. Please try again!");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Thêm nhân viên</Modal.Title>
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
                    placeholder="Nhập tên nhân viên"
                    required
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
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">
                    Chức vụ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="Nhập chức vụ"
                    required
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
                    required
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
                Thêm nhân viên
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddStaffsModal;
