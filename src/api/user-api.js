import axios from "axios";

const link = 'http://localhost:3001';

export const getPackage = () => {
    axios.get(`${link}/home/packages`)
    .then(
        res => {
           return res.data;
        } 
    )
    .catch(
        err => console.log(err)
        )
}

export const getSpecialOffer = () => {
    axios.get(`${link}/home/specialOffers`)
    .then(
        res => {
            return res.data;
        } 
    )
    .catch(
        err => console.log(err)
        )
}

export const getWishlist = async() => {
    try {
        const res = await axios.get(`${link}/client/wishlist?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6InVzZXIiLCJpYXQiOjE2NjQxOTI4NDR9.ciJu0YkeWdJICEP5YsgXFeg85YSylWkPVENlNZ2djk8'
            }
        });
        console.log(res.data.wishLists)
    }
    catch(err) {
        console.log(err);
    } 
}

export const createWishlist = (id) => {
    return fetch(`${link}/client/wishlist/${id}?type=client`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6InVzZXIiLCJpYXQiOjE2NjQxOTI4NDR9.ciJu0YkeWdJICEP5YsgXFeg85YSylWkPVENlNZ2djk8`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const deleteWishlist = async(id) => {
    try {
        const res = await axios.delete(`${link}/client/wishlist/${id}?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6InVzZXIiLCJpYXQiOjE2NjQxOTI4NDR9.ciJu0YkeWdJICEP5YsgXFeg85YSylWkPVENlNZ2djk8'
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}

export const getCart = async() => {
    try {
        const res = await axios.get(`${link}/client/cart?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6InVzZXIiLCJpYXQiOjE2NjQxOTI4NDR9.ciJu0YkeWdJICEP5YsgXFeg85YSylWkPVENlNZ2djk8'
            }
        });
        console.log(res.data.Carts)
    }
    catch(err) {
        console.log(err);
    } 
}

export const createCart = (id) => {
    return fetch(`${link}/client/cart/${id}?type=client`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6InVzZXIiLCJpYXQiOjE2NjQxOTI4NDR9.ciJu0YkeWdJICEP5YsgXFeg85YSylWkPVENlNZ2djk8`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const deleteCart = async(id) => {
    try {
        const res = await axios.delete(`${link}/client/cart/${id}?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6InVzZXIiLCJpYXQiOjE2NjQxOTI4NDR9.ciJu0YkeWdJICEP5YsgXFeg85YSylWkPVENlNZ2djk8'
            }
        });
        console.log(res.data)
    }
    catch(err) {
        console.log(err);
    } 
}