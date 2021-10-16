import React from "react";
import "./app.css";
import Card from "./card";

export default function FirstYear() {
  return (
    <div className="center">
      {/* CARDS */}
      <div className="card-container">
        <Card
          year="MATHS-I"
          message="TO BE ADDED SOON"
          href="/1st-year/maths-i"
        />
        <Card
          year="MATHS-II"
          message="TO BE ADDED SOON"
          href="/1st-year/maths-ii"
        />
        <Card year="CHEM" message="CLICK ME!!!" href="/1st-year/chem" />
        <Card year="PHY" message="TO BE ADDED SOON" href="/1st-year/phy" />
        <Card year="BEE" message="TO BE ADDED SOON" href="/1st-year/bee" />
        <Card year="BE" message="TO BE ADDED SOON" href="/1st-year/be" />
        <Card year="EGD" message="TO BE ADDED SOON" href="/1st-year/egd" />
        <Card year="BMP" message="TO BE ADDED SOON" href="/1st-year/bmp" />
        <Card year="PPS" message="TO BE ADDED SOON" href="/1st-year/pps" />
      </div>
    </div>
  );
}
