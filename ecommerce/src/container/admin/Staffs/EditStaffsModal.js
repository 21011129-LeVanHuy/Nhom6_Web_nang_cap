import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditStaffsModal = ({ show, handleClose, staff = {}, handleUpdate }) => {
  const [editedName, setEditedName] = useState("");
  const [editedImg, setEditedImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editedGender, setEditedGender] = useState("");
  const [editedPosition, setEditedPosition] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (staff) {
      setEditedName(staff.name || "");
      setPreview(staff.img || "");
      setEditedGender(staff.gender || "");
      setEditedPosition(staff.position || "");
    }
  }, [staff]);

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
      formData.append("position", editedPosition);

      if (editedImg) {
        formData.append("img", editedImg);
      } else {
        formData.append("existing_img", preview); 
      }

      await axios.post(
        `http://localhost:8000/api/updatestaffs/${staff.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Staff updated successfully!");
      window.location.reload();
      handleClose();
      handleUpdate(staff.id, {
        ...staff,
        name: editedName,
        img: editedImg ? URL.createObjectURL(editedImg) : preview,
        gender: editedGender,
        position: editedPosition,
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to update staff. Please try again!");
    }
  };

  const isBlobUrl = (url) => url.startsWith("blob:");

  return (
    <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Staff</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmitEdit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="editedName" className="form-label">
                  Staff Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editedName"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Enter staff name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editedGender" className="form-label">
                  Gender
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editedGender"
                  value={editedGender}
                  onChange={(e) => setEditedGender(e.target.value)}
                  placeholder="Enter gender"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editedPosition" className="form-label">
                  Position
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editedPosition"
                  value={editedPosition}
                  onChange={(e) => setEditedPosition(e.target.value)}
                  placeholder="Enter position"
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
                      src={`http://localhost:8000/staffs/${
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

export default EditStaffsModal;
