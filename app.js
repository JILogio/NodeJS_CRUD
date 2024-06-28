const express = require('express');
const { auth } = require('express-openid-connect');
const app = express();

//Auth0 config
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'GGJF9838pHARi4BsmjeP4WtoyDvGRmjsXDPh8CkZsy8Iv6u9Ty1StlQ3XkufF6Gm',
    baseURL: 'http://localhost:5000',
    clientID: '3wcO6MpQWkrn3iLzZ1cc95nybbHHLGpL',
    issuerBaseURL: 'https://dev-z544bfsjzgmra2rl.us.auth0.com'
  };

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(JSON));
app.use(auth(config));

app.use('/',require('./router'));
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

app.listen(5000, ()=>{
    console.log('Server corriendo en http://localhost:5000');
});