import axios from "axios";
const link = 'http://localhost:3001';


export const getCompanyPackages = async() => {
    try {
        const res = await axios.get(`${link}/company/packages?type=company`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I'
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const getCompanyAcceptedPackages = async() => {
    try {
        const res = await axios.get(`${link}/company/packages/accepted?type=company`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I'
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const getCompanyRejectedPackages = async() => {
    try {
        const res = await axios.get(`${link}/company/packages/rejected?type=company`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I'
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const createCompanyPackage = async(data) => {
        try {
            const res = await axios.post(`${link}/company/create?type=company`, data, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I'
                }
            });
            console.log(res.data)
        }
        catch(err) {
            console.log(err);
        } 
    }

    export const deleteCompanyPackage = async(id) => {
        try {
            const res = await axios.delete(`${link}/company/package/delete/${ id }?type=company`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I'
                }
            });
            console.log(res.data)
        }
        catch(err) {
            console.log(err);
        } 
    }
