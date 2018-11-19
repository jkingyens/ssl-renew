# ssl-renew
renew a lets encrypt SSL cert using DNS challenge on gcloud managed name server

## how to run

set some environment variables:

$RENEW_DOMAIN - the name of the domain you want to renew ie) substrait.com

$RENEW_EMAIL - the email address to get expire reminders sent to

mount some volumes:

/root/dns-admin.json - a JSON-based authentication key furnished in the gcloud console that has DNS admin rights

/etc/certs - mount a host volume to this container path in order to capture the resulting private key and cert

## Example

    docker run -e RENEW_DOMAIN=count2k.com -e RENEW_EMAIL=jeff@myemail.com -v /Users/jkingyens/dns-admin.json:/root/dns-admin.json -v /Users/jkingyens/certs:/etc/certs jkingyens/ssl-renew:latest

After running this command your SSL cert and key would be in /Users/jkingyens/certs. Easy!
