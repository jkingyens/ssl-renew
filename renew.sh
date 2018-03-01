#!/bin/sh
certbot --email ${RENEW_EMAIL} --agree-tos --manual-public-ip-logging-ok -n -d ${RENEW_DOMAIN} --manual-auth-hook /root/auth.sh --manual --preferred-challenges dns certonly
node cleanup.js
