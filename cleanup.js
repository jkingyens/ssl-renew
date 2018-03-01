var fs = require('fs')
var request = require('request')

// copy the certificate and private key into a host mapped volume (/etc/certs)
fs.createReadStream('/etc/letsencrypt/live/' + process.env.RENEW_DOMAIN + '/fullchain.pem').pipe(fs.createWriteStream('/etc/certs/' + process.env.RENEW_DOMAIN + '.cert'))
fs.createReadStream('/etc/letsencrypt/live/' + process.env.RENEW_DOMAIN + '/privkey.pem').pipe(fs.createWriteStream('/etc/certs/' + process.env.RENEW_DOMAIN + '.key'))

// restart the proxy (or is this a better way to do this?) to show the latest
// the other thing we could do is use a configuration provider which allows more dynamic updates
// redeploy the service without reusing volumes:
var dockerToken = fs.readFileSync('/root/docker.token').toString().trim();
console.log(dockerToken);
// https://docs.docker.com/apidocs/docker-cloud/#redeploy-a-service
