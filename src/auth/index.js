import Cookies from 'universal-cookie';
const cookies = new Cookies();

// signup
// signin


export const signup = user => {
    return fetch(`https://store-server-saleh.herokuapp.com/api/v1/users/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    });
};

export const signin = async(username,password) => {
    console.log(username);
    return await fetch(`https://midterm-project-ltuc.herokuapp.com/auth/login`, {
        method: 'POST',
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
        body: JSON.stringify()
    }).then(response => {

        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const authenticate = (data, next) => {
    cookies.set('data', data, {path: '/'});
    // window
    //     .location
    //     .reload();
    next();
};

export const signout = next => {
    cookies.remove('data', {path: '/'})
    window
        .location
        .reload();

};

export const isAuthenticated = () => {
    if (cookies.get('data') === 'undefined') {
        return false;
    }
    if (cookies.get('data')) {
        return cookies.get('data');
    } else {
        return false;
    }
};


