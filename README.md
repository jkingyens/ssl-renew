# ssl-renew
renew a lets encrypt SSL cert using DNS challenge on gcloud managed name server

## how to run

set some environment variables:

$GCLOUD_PROJECT_ID - the project id of the gcloud project your dns records are kept

$RENEW_DOMAIN - the domain you want to renew ie) substrait.com

$RENEW_EMAIL - the email address passed to lets encrypt to get renew reminders

mount some volumes:

/root/dns-admin.json - a JSON-based authentication key furnished in the gcloud console that has DNS admin rights

/etc/certs - mount a host volume to this container path in order to capture the resulting private key and cert
