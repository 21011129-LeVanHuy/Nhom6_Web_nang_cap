import React from "react";
import HeaderHome from "../../components/home/HeaderHome";
import FootterHome from "../../components/home/FootterHome";

const About = () => {
  return (
    <>
      <HeaderHome />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center">Giới thiệu</div>
        </div>
        <div className="row">
          <div className="col">
            <p>Nhóm 6</p>
            <p>
              Địa chỉ: Khoa CNTT-Trường Đại học Phenikaa
            </p>
            <p>Thành viên: Lê Văn Huy</p>
            <p>MSSV: 21011129</p>
            <p>Thành viên: Lê Thành Đạt</p>
            <p>MSSV: 21011591</p>
            
          </div>
        </div>
      </div>
      <FootterHome />
    </>
  );
};

export default About;
