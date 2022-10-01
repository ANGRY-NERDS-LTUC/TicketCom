import React, { useEffect, useState } from "react";
import "./companyPackages.css";
import axios from "axios";

function CompanyPackages() {
  const [companyPackages, setCompanyPackages] = useState([]);
  const [acceptedCompanyPackages, setAcceptedCompanyPackages] = useState([]);
  const [rejectedCompanyPackages, setRejectedCompanyPackages] = useState([]);

  const getCompanyPackages = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/company/packages?type=company`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I",
        },
      })
    ).data;
    setCompanyPackages(data);
  };

  const deleteCompanyPackage = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/company/package/delete/${id}?type=company`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCompanyAcceptedPackages = async () => {
    const data = await (
      await axios.get(
        `http://localhost:3001/company/packages/accepted?type=company`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I",
          },
        }
      )
    ).data;
    setAcceptedCompanyPackages(data);
  };

  const getCompanyRejectedPackages = async () => {
    const data = await (
      await axios.get(
        `http://localhost:3001/company/packages/rejected?type=company`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I",
          },
        }
      )
    ).data;
    setRejectedCompanyPackages(data);
  };

  useEffect(() => {
    getCompanyPackages();
    getCompanyAcceptedPackages();
    getCompanyRejectedPackages();
  }, [companyPackages]);

  function deletePackage(id) {
    deleteCompanyPackage(id);
  }

  return (
    <div className="companyPackages">
      <h2>All Packages</h2>
      <div className="allPackages">
        {companyPackages.map((item) => {
          return (
            <div className="Card">
              <img src={item.image} alt="" className="image" />
              <div className="Data">
                <h2 className="Title">{item.title}</h2>
                <h3 className="Category">{item.createdBy}</h3>
                <h3 className="Duration">{item.duration} days</h3>
                <h3 className="Price">{item.price} $</h3>
                <p className="Description">{item.description}</p>
                <p
                  className="DeletePackage"
                  onClick={() => deletePackage(item.id)}
                >
                  Delete
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Accepted Packages</h2>
      <div className="acceptedPackages">
        <br />
        {acceptedCompanyPackages.map((item) => {
          return (
            <div className="Card">
              <img src={item.image} alt="" className="image" />
              <div className="Data">
                <h2 className="Title">{item.title}</h2>
                <h3 className="Category">{item.createdBy}</h3>
                <h3 className="Duration">{item.duration} days</h3>
                <h3 className="Price">{item.price} $</h3>
                <p className="Description">{item.description}</p>
                <p
                  className="DeletePackage"
                  onClick={() => deletePackage(item.id)}
                >
                  Delete
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Rejected Packages</h2>
      <div className="rejectPackages">
        <br />
        {rejectedCompanyPackages.map((item) => {
          return (
            <div className="Card">
              <img src={item.image} alt="" className="image" />
              <div className="Data">
                <h2 className="Title">{item.title}</h2>
                <h3 className="Category">{item.createdBy}</h3>
                <h3 className="Duration">{item.duration} days</h3>
                <h3 className="Price">{item.price} $</h3>
                <p className="Description">{item.description}</p>
                <p
                  className="DeletePackage"
                  onClick={() => deletePackage(item.id)}
                >
                  Delete
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPackages;
