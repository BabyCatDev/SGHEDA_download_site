import React from "react";
import { CoverH1 } from "./AboutElements";
const PersonCardRight = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ height: "20vw", position: "relative", marginRight: "4vw" }}>
        <img
          src="image/Eric Snow.png"
          style={{
            height: "20vw",
            width: "20vw",
            borderRadius: "10px",
            borderWidth: "10px",
            borderColor: "#1B233F",
          }}
          alt="Person"
        />
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            width: "20vw",
            height: "4vw",
            position: "absolute",
            bottom: 0,
            left: 0,
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <CoverH1 style={{ fontSize: "25px" }}>Eric Snow</CoverH1>
          <CoverH1 style={{ fontSize: "20px", marginTop: "3px" }}>
            Chief Executive Officer
          </CoverH1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "35vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CoverH1
            style={{ fontSize: "24px", color: "#738A9D", lineHeight: "30px" }}
          >
            Jeff Hammond is Executive Director at the International Ground
            Source Heat Pump Association (IGSHPA). Jeff earned a B.S. in
            business administration from the University of Saint Francis in Fort
            Wayne, Indiana, and an A.A.S. in electrical engineering technology
            from Purdue University. He has over 35 years’ experience in the
            ground source heat pump (geothermal) industry, including positions
            at ClimateMaster, Enertech, Geo-Flo, and WaterFurnace. Jeff is a
            member of ASHRAE (American Society of Heating, Refrigerating, and
            Air Conditioning Engineers), AEE (Association of Energy Engineers),
            ASAE (American Society of Association
          </CoverH1>
        </div>
      </div>
    </div>
  );
};

export default PersonCardRight;
