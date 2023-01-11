const user = {
    name: 'Nehal Mahida',
    username: 'nehal_mahida',
    password: 'password:)',
    login: function (username, password){ 
if(username === this.username && password === this.password) {
        console.log('Login succesfully');
} else {
    console.log('Authentication Failed !!');
}
},
};

// user.login('nehal', 'nehal');
  user.login('nehal_mahida', 'password:)');
//  user.login('nehal_mahida', 'abcde')