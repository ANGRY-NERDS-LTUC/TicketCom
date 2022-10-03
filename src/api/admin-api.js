import axios from "axios";
const link = 'http://localhost:3001';


const getToken = () => document.cookie.replace('token=', '');

export const getAllPackages = async() => {
    console.log('admin',user);
    try {
        const res = await axios.get(`${link}/admin/package?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${getToken}`
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const getPublishedPackages = async() => {
    try {
        const res = await axios.get(`${link}/admin/package/published?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${getToken}`
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const getNotPublishedPackages = async() => {
    try {
        const res = await axios.get(`${link}/admin/package/notpublished?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${getToken}`
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const getRejectedPackages = async() => {
    try {
        const res = await axios.get(`${link}/admin/package/reject?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${getToken}`
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const acceptPackage = async(id) => {
    try {
        const res = await axios.get(`${link}/admin/package/accept?type=client&id=${id}`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${getToken}`
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const rejectPackage = (id) => {
    return fetch(`${link}/admin/package/reject?type=client&id=${id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const deletePackage = async(id) => {
    try {
        const res = await axios.delete(`${link}/admin/package/delete?type=client&id=${id}`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${getToken}`
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}
