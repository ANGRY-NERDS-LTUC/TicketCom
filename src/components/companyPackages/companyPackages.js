import React, { useEffect, useState } from "react";
import "./companyPackages.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
const cookies = new Cookies();
const user = cookies.get("data");

function CompanyPackages() {
  const [companyPackages, setCompanyPackages] = useState([]);
  const [acceptedCompanyPackages, setAcceptedCompanyPackages] = useState([]);
  const [rejectedCompanyPackages, setRejectedCompanyPackages] = useState([]);
  const [all, setAll] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const getCompanyPackages = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/company/packages?type=company`, {
        headers: {
          Accept: "application/json",
          Authorization: `${user.token}`,
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
            Authorization: `${user.token}`,
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
            Authorization: `${user.token}`,
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
            Authorization: `${user.token}`,
          },
        }
      )
    ).data;
    setRejectedCompanyPackages(data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getCompanyPackages();
    getCompanyAcceptedPackages();
    getCompanyRejectedPackages();
  }, [companyPackages]);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  function deletePackage(id) {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, check out!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteCompanyPackage(id);
          swalWithBootstrapButtons.fire(
            "Thank you for your trust!",
            "Your packages has been checked out.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }

  function allHandeler() {
    setAll(true);
    setAccepted(false);
    setRejected(false);
  }

  function acceptedHandeler() {
    setAll(false);
    setAccepted(true);
    setRejected(false);
  }

  function rejectedHandeler() {
    setAll(false);
    setAccepted(false);
    setRejected(true);
  }

  return (
    <div className="companyPackages">
      <div className="leftSide">
        <h1>Categories</h1>
        <button className="filterButton" onClick={allHandeler}>
          All Packages
        </button>
        <button className="filterButton" onClick={acceptedHandeler}>
          Accepted Packages
        </button>
        <button className="filterButton" onClick={rejectedHandeler}>
          Rejected Packages
        </button>
      </div>
      <div className="rightSide">
        {all && (
          <div className="allCompanyPackages">
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
                    <button
                      className="DeletePackage"
                      onClick={() => deletePackage(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {accepted && (
          <div className="acceptedPackages">
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
                    <button
                      className="DeletePackage"
                      onClick={() => deletePackage(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {rejected && (
          <div className="rejectPackages">
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
                    <button
                      className="DeletePackage"
                      onClick={() => deletePackage(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyPackages;
