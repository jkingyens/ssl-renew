#!/bin/sh
certbot --email ${RENEW_EMAIL} --agree-tos --manual-public-ip-logging-ok -n -d *.${RENEW_DOMAIN} -d ${RENEW_DOMAIN} --manual-auth-hook /root/auth.sh --manual --preferred-challenges dns certonly --server https://acme-v02.api.letsencrypt.org/directory
node cleanup.js
