#!/bin/sh
certbot --email jeff.kingyens@gmail.com --agree-tos --manual-public-ip-logging-ok -n -d ${RENEW_DOMAIN} --manual-auth-hook /root/auth.sh --manual --preferred-challenges dns certonly
node cleanup.js
