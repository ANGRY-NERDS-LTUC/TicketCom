import React, { useState, useEffect, useContext } from "react";
import "./adminPackages.css";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("data")
function AdminPackages() {
  const [allPackages, setAllPackages] = useState([]);
  const [publishedPackages, setPublishedPackages] = useState([]);
  const [rejectedPackages, setRejectedPackages] = useState([]);
  const [notPublishedPackages, setNotPublishedPackages] = useState([]);

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

  useEffect(() => {
    getAllPackages();
    getPublishedPackages();
    getRejectedPackages();
    getNotPublishedPackages();
  }, [allPackages]);

  function deleteThePackage(id) {
    deletePackage(id);
  }

  function acceptThePackage(id) {
    acceptPackage(id);
  }

  function rejectThePackage(id) {
    rejectPackage(id);
  }

  return (
    <div className="adminPackages">
      <h2>All Packages</h2>
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
                <p
                  className="AcceptThePackage"
                  onClick={() => acceptThePackage(item.id)}
                >
                  Accept
                </p>
                <p
                  className="RejectThePackage"
                  onClick={() => rejectThePackage(item.id)}
                >
                  Reject
                </p>
                <p
                  className="DeleteThePackage"
                  onClick={() => deleteThePackage(item.id)}
                >
                  Delete
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Published Packages</h2>
      <div className="publishedPackages">
        <br />
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
                <p
                  className="DeletePackage"
                  onClick={() => deleteThePackage(item.id)}
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
                <p
                  className="DeletePackage"
                  onClick={() => deleteThePackage(item.id)}
                >
                  Delete
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Not Published Packages</h2>
      <div className="notPublishedPackages">
        <br />
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
                <p
                  className="DeletePackage"
                  onClick={() => deleteThePackage(item.id)}
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

export default AdminPackages;
