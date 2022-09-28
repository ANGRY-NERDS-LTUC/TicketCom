import React, { useState, useEffect } from "react";
import './adminPackages.css';
import axios from "axios";

function AdminPackages() {

    const [allPackages, setAllPackages] = useState([]);
    const [publishedPackages, setPublishedPackages] = useState([]);
    const [rejectedPackages, setRejectedPackages] = useState([]);
    const [notPublishedPackages, setNotPublishedPackages] = useState([]);

    const getAllPackages = async() => {
            const data = await (await axios.get(`http://localhost:3001/admin/package?type=client`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImFkbWluIiwiaWF0IjoxNjY0MzY0NzkyfQ.6ByX8uYxDstGVgQ8CiUJMbJ8DhDlzF07mgmIqbPxjo0'
                }
            })).data;
            setAllPackages(data);
        }

    const deletePackage = async(id) => {
        try {
            const res = await axios.delete(`http://localhost:3001/admin/package/delete?type=client&id=${id}`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImFkbWluIiwiaWF0IjoxNjY0MzY0NzkyfQ.6ByX8uYxDstGVgQ8CiUJMbJ8DhDlzF07mgmIqbPxjo0'
                }
            });
            console.log(res.data)
        }
        catch(err) {
            console.log(err);
        } 
    }

    const getPublishedPackages = async() => {
            const data = await (await axios.get(`http://localhost:3001/admin/package/published?type=client`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImFkbWluIiwiaWF0IjoxNjY0MzY0NzkyfQ.6ByX8uYxDstGVgQ8CiUJMbJ8DhDlzF07mgmIqbPxjo0'
                }
            })).data;
            setPublishedPackages(data);
        }

    const getRejectedPackages = async() => {
            const data = await (await axios.get(`http://localhost:3001/admin/package/reject?type=client`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImFkbWluIiwiaWF0IjoxNjY0MzY0NzkyfQ.6ByX8uYxDstGVgQ8CiUJMbJ8DhDlzF07mgmIqbPxjo0'
                }
            })).data;
            setRejectedPackages(data);
    }

    const getNotPublishedPackages = async() => {
            const data = await (await axios.get(`http://localhost:3001/admin/package/notpublished?type=client`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImFkbWluIiwiaWF0IjoxNjY0MzY0NzkyfQ.6ByX8uYxDstGVgQ8CiUJMbJ8DhDlzF07mgmIqbPxjo0'
                }
            })).data;
            setNotPublishedPackages(data);
    }

    const acceptPackage = async(id) => {
        try {
            const res = await axios.get(`http://localhost:3001/admin/package/accept?type=client&id=${id}`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImFkbWluIiwiaWF0IjoxNjY0MzY0NzkyfQ.6ByX8uYxDstGVgQ8CiUJMbJ8DhDlzF07mgmIqbPxjo0'
                }
            });
            console.log(res.data)
        }
        catch(err) {
            console.log(err);
        } 
    }

    const rejectPackage = (id) => {
        return fetch(`http://localhost:3001/admin/package/reject?type=client&id=${id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImFkbWluIiwiaWF0IjoxNjY0MzY0NzkyfQ.6ByX8uYxDstGVgQ8CiUJMbJ8DhDlzF07mgmIqbPxjo0`
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
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
            <div className="allPAckages">
                <h2>All Packages</h2>
                { allPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="companyPackageButton" onClick={ () => acceptThePackage(item.id) }>Accept Package</button>
                        <button className="companyPackageButton" onClick={ () => rejectThePackage(item.id) }>Reject Package</button>
                        <button className="companyPackageButton" onClick={ () => deleteThePackage(item.id) }>Delete Package</button>
                    </div>
                </div> } )} 
            </div>
            <div className="publishedPackages">
                <h2>Published Packages</h2><br/>
                { publishedPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="companyPackageButton" onClick={ () => deleteThePackage(item.id) }>Delete Package</button>
                    </div>
                </div> } )}
            </div>
            <div className="rejectPackages">
                <h2>Rejected Packages</h2><br/>
                { rejectedPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="companyPackageButton" onClick={ () => deleteThePackage(item.id) }>Delete Package</button>
                    </div>
                </div> } )}
            </div>
            <div className="notPublishedPackages">
                <h2>Not Published Packages</h2><br/>
                { notPublishedPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="companyPackageButton" onClick={ () => deleteThePackage(item.id) }>Delete Package</button>
                    </div>
                </div> } )}
            </div>
        </div>
    );
}

export default AdminPackages;