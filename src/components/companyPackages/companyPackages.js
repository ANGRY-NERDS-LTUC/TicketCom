import React, { useEffect, useState } from 'react';
import './companyPackages.css';
import axios from 'axios';

function CompanyPackages() {
  const [companyPackages, setCompanyPackages] = useState([]);
  const [acceptedCompanyPackages, setAcceptedCompanyPackages] = useState([]);
  const [rejectedCompanyPackages, setRejectedCompanyPackages] = useState([]);

  const getCompanyPackages = async () => {
    const data = await (
      await axios.get(`http://localhost:5000/company/packages?type=company`, {
        headers: {
          Accept: 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6Im1hbGVrIiwiaWF0IjoxNjY0NTU0MzUxfQ._IRCspjjhK-iIUSBBxptsGMO5OLLsGCXec38R7zds74',
        },
      })
    ).data;
    setCompanyPackages(data);
  };

  const deleteCompanyPackage = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/company/package/delete/${id}?type=company`,
        {
          headers: {
            Accept: 'application/json',
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6Im1hbGVrIiwiaWF0IjoxNjY0NTU0MzUxfQ._IRCspjjhK-iIUSBBxptsGMO5OLLsGCXec38R7zds74',
          },
        },
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCompanyAcceptedPackages = async () => {
    const data = await (
      await axios.get(
        `http://localhost:5000/company/packages/accepted?type=company`,
        {
          headers: {
            Accept: 'application/json',
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6Im1hbGVrIiwiaWF0IjoxNjY0NTU0MzUxfQ._IRCspjjhK-iIUSBBxptsGMO5OLLsGCXec38R7zds74',
          },
        },
      )
    ).data;
    setAcceptedCompanyPackages(data);
  };

  const getCompanyRejectedPackages = async () => {
    const data = await (
      await axios.get(
        `http://localhost:5000/company/packages/rejected?type=company`,
        {
          headers: {
            Accept: 'application/json',
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6Im1hbGVrIiwiaWF0IjoxNjY0NTU0MzUxfQ._IRCspjjhK-iIUSBBxptsGMO5OLLsGCXec38R7zds74',
          },
        },
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
    <div className='companyPackages'>
      <div className='allPAckages'>
        <h2>All Packages</h2>
        {companyPackages.map((item) => {
          return (
            <div className='Card'>
              <img
                src={item.image}
                alt=''
                className='image'
              />
              <div className='Data'>
                <h2 className='Title'>{item.title}</h2>
                <h3 className='Category'>{item.createdBy}</h3>
                {/* <h3 className="Duration">{ item.duration } days</h3> */}
                <h3 className='Price'>{item.price} $</h3>
                <p className='Description'>{item.description}</p>
                <p
                  className='DeletePackage'
                  onClick={() => deletePackage(item.id)}>
                  Delete Package
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='acceptedPackages'>
        <h2>Accepted Packages</h2>
        <br />
        {acceptedCompanyPackages.map((item) => {
          return (
            <div className='Card'>
              <img
                src={item.image}
                alt=''
                className='image'
              />
              <div className='Data'>
                <h2 className='Title'>{item.title}</h2>
                <h3 className='Category'>{item.createdBy}</h3>
                {/* <h3 className="Duration">{ item.duration } days</h3> */}
                <h3 className='Price'>{item.price} $</h3>
                <p className='Description'>{item.description}</p>
                <p
                  className='DeletePackage'
                  onClick={() => deletePackage(item.id)}>
                  Delete Package
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='rejectPackages'>
        <h2>Rejected Packages</h2>
        <br />
        {rejectedCompanyPackages.map((item) => {
          return (
            <div className='Card'>
              <img
                src={item.image}
                alt=''
                className='image'
              />
              <div className='Data'>
                <h2 className='Title'>{item.title}</h2>
                <h3 className='Category'>{item.createdBy}</h3>
                {/* <h3 className="Duration">{ item.duration } days</h3> */}
                <h3 className='Price'>{item.price} $</h3>
                <p className='Description'>{item.description}</p>
                <p
                  className='DeletePackage'
                  onClick={() => deletePackage(item.id)}>
                  Delete Package
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
