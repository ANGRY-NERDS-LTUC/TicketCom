import React, { useState, useEffect, useContext } from "react";
import "./adminPackages.css";
import axios from "axios";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const cookies = new Cookies();
const user = cookies.get("data");
function AdminPackages() {
  const [allPackages, setAllPackages] = useState([]);
  const [publishedPackages, setPublishedPackages] = useState([]);
  const [rejectedPackages, setRejectedPackages] = useState([]);
  const [notPublishedPackages, setNotPublishedPackages] = useState([]);
  const [all, setAll] = useState(true);
  const [puplished, setPuplished] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [notPuplished, setNotPuplished] = useState(false);

  // const getToken = () => document.cookie.replace("token=", "");
  const getAllPackages = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/admin/package?type=client`, {
        headers: {
          Accept: "application/json",
          Authorization: `${user.token}`,
        },
      })
    ).data;
    setAllPackages(data);
  };

  const deletePackage = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/admin/package/delete?type=client&id=${id}`,
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

  const getPublishedPackages = async () => {
    const data = await (
      await axios.get(
        `http://localhost:3001/admin/package/published?type=client`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `${user.token}`,
          },
        }
      )
    ).data;
    setPublishedPackages(data);
  };

  const getRejectedPackages = async () => {
    const data = await (
      await axios.get(
        `http://localhost:3001/admin/package/reject?type=client`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `${user.token}`,
          },
        }
      )
    ).data;
    setRejectedPackages(data);
  };

  const getNotPublishedPackages = async () => {
    const data = await (
      await axios.get(
        `http://localhost:3001/admin/package/notpublished?type=client`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `${user.token}`,
          },
        }
      )
    ).data;
    setNotPublishedPackages(data);
  };

  const acceptPackage = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/admin/package/accept?type=client&id=${id}`,
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

  const rejectPackage = (id) => {
    return fetch(
      `http://localhost:3001/admin/package/reject?type=client&id=${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${user.token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
  useEffect(() => {
    getAllPackages();
    getPublishedPackages();
    getRejectedPackages();
    getNotPublishedPackages();
  }, [allPackages]);

  function deleteThePackage(id) {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          //true =yes
          deletePackage(id);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          //false cancel
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }

  function acceptThePackage(id) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Package Accepted",
      showConfirmButton: false,
      timer: 1500,
    });
    acceptPackage(id);
  }

  function rejectThePackage(id) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Package Rejected",
      showConfirmButton: false,
      timer: 1500,
    });
    rejectPackage(id);
  }

  function allHandeler() {
    setAll(true);
    setPuplished(false);
    setRejected(false);
    setNotPuplished(false);
  }

  function puplishedHandeler() {
    setAll(false);
    setPuplished(true);
    setRejected(false);
    setNotPuplished(false);
  }

  function rejectedHandeler() {
    setAll(false);
    setPuplished(false);
    setRejected(true);
    setNotPuplished(false);
  }

  function notPuplishedHandeler() {
    setAll(false);
    setPuplished(false);
    setRejected(false);
    setNotPuplished(true);
  }

  return (
    <div className="adminPackages">
      <div className="leftSide">
        <h1>Categories</h1>
        <button className="filterButton" onClick={allHandeler}>
          All Packages
        </button>
        <button className="filterButton" onClick={puplishedHandeler}>
          Published Packages
        </button>
        <button className="filterButton" onClick={rejectedHandeler}>
          Rejected Packages
        </button>
        <button className="filterButton" onClick={notPuplishedHandeler}>
          Not Published Packages
        </button>
      </div>
      <div className="rightSide">
        {/* <h2>All Packages</h2> */}
        {all && (
          <div className="allPackages">
            {allPackages.map((item) => {
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
                      className="AcceptThePackage"
                      onClick={() => acceptThePackage(item.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="RejectThePackage"
                      onClick={() => rejectThePackage(item.id)}
                    >
                      Reject
                    </button>
                    <button
                      className="DeleteThePackage"
                      onClick={() => deleteThePackage(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* <h2>Published Packages</h2> */}
        {puplished && (
          <div className="publishedPackages">
            {publishedPackages.map((item) => {
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
                      onClick={() => deleteThePackage(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* <h2>Rejected Packages</h2> */}
        {rejected && (
          <div className="rejectPackages">
            {rejectedPackages.map((item) => {
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
                      onClick={() => deleteThePackage(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* <h2>Not Published Packages</h2> */}
        {notPuplished && (
          <div className="notPublishedPackages">
            {notPublishedPackages.map((item) => {
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
                      onClick={() => deleteThePackage(item.id)}
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

export default AdminPackages;
