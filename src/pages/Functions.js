import axios from 'axios'

// export const register = newUser => {
//     return axios
//         .post('users/register', {
//             User_g: newUser.User_g,
//             Password: newUser.Password,
//             Fname: newUser.Fname,
//             Lname: newUser.Lname,
//             Address: newUser.Address,
//             Phonenumber: newUser.Phonenumber,
//         })
//         .then(res => {
//             console.log('Registered!')
//         })
// }

// export const login = user => {
//     return axios
//         .post('users/login', {
//             User_g: user.User_g,
//             Password: user.Password
//         })
//         .then(res => {
//             // console.log(res.data);
//             localStorage.setItem('usertoken', res.data)
//             return res.data
//         })
//         .catch(err => {
//             console.log(err)
//             console.log("ok_Front");

//         })
        

// }