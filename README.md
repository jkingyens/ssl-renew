# ssl-renew
renew a lets encrypt SSL cert using DNS challenge on gcloud managed name server

## how to run

set some environment variables:

$GCLOUD_PROJECT_ID - the project id where your cloud DNS records are stored

$RENEW_DOMAIN - the name of the domain you want to renew ie) substrait.com

$RENEW_EMAIL - the email address to get expire reminders sent to

mount some volumes:

/root/dns-admin.json - a JSON-based authentication key furnished in the gcloud console that has DNS admin rights

/etc/certs - mount a host volume to this container path in order to capture the resulting private key and cert
