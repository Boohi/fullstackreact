const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'klajmsdklfmasd' }, (err, tunnel) => {
    console.log('LT running');
});
