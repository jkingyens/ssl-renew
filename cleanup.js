var fs = require('fs')

// copy the certificate and private key into a host mapped volume (/etc/certs)
fs.createReadStream('/etc/letsencrypt/live/' + process.env.RENEW_DOMAIN + '/fullchain.pem').pipe(fs.createWriteStream('/etc/certs/' + process.env.RENEW_DOMAIN + '.cert'))
fs.createReadStream('/etc/letsencrypt/live/' + process.env.RENEW_DOMAIN + '/privkey.pem').pipe(fs.createWriteStream('/etc/certs/' + process.env.RENEW_DOMAIN + '.key'))
