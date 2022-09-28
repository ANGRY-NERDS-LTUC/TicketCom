import React, { useEffect, useState } from "react";
import './companyPackages.css';
import axios from "axios";

function CompanyPackages() {

    const [companyPackages, setCompanyPackages] = useState([]);
    const [acceptedCompanyPackages, setAcceptedCompanyPackages] = useState([]);
    const [rejectedCompanyPackages, setRejectedCompanyPackages] = useState([]);


    const getCompanyPackages = async() => {
        const data = await (await axios.get(`http://localhost:3001/company/packages?type=company`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQzNjQ5Mzd9.RUtdcBQ3YWdSjfhCfqsJKBVBZX0jp3xITh0OKbYWSvU'
            }
        })).data;
        setCompanyPackages(data);
    }

    const deleteCompanyPackage = async(id) => {
        try {
            const res = await axios.delete(`http://localhost:3001/company/package/delete/${ id }?type=company`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQzNjQ5Mzd9.RUtdcBQ3YWdSjfhCfqsJKBVBZX0jp3xITh0OKbYWSvU'
                }
            });
            console.log(res.data)
        }
        catch(err) {
            console.log(err);
        } 
    }

    const getCompanyAcceptedPackages = async() => {
        const data = await ( await axios.get(`http://localhost:3001/company/packages/accepted?type=company`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQzNjQ5Mzd9.RUtdcBQ3YWdSjfhCfqsJKBVBZX0jp3xITh0OKbYWSvU'
            }
            })).data;
            setAcceptedCompanyPackages(data);
    }
    
    const getCompanyRejectedPackages = async() => {
            const data = await (await axios.get(`http://localhost:3001/company/packages/rejected?type=company`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQzNjQ5Mzd9.RUtdcBQ3YWdSjfhCfqsJKBVBZX0jp3xITh0OKbYWSvU'
                }
            })).data;
            setRejectedCompanyPackages(data);
    }

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
            <div className="allPAckages">
                <h2>All Packages</h2>
                { companyPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="companyPackageButton" onClick={ () => deletePackage(item.id) }>Delete Package</button>
                    </div>
                </div> } )} 
            </div>
            <div className="acceptedPackages">
                <h2>Accepted Packages</h2><br/>
                { acceptedCompanyPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="companyPackageButton" onClick={ () => deletePackage(item.id) }>Delete Package</button>
                    </div>
                </div> } )}
            </div>
            <div className="rejectPackages">
                <h2>Rejected Packages</h2><br/>
                { rejectedCompanyPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="companyPackageButton" onClick={ () => deletePackage(item.id) }>Delete Package</button>
                    </div>
                </div> } )}
            </div>
        </div>
    );
}

export default CompanyPackages;