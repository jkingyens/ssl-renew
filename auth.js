const DNS = require('@google-cloud/dns');
const parseDomain = require('parse-domain')
const parsedKeyFile = require('/root/dns-admin.json')
const projectId = parsedKeyFile['project_id']
const parsedDomain = parseDomain(process.env.CERTBOT_DOMAIN)
const domain = parsedDomain.domain

// Creates a client
const dns = new DNS({
  projectId: projectId,
  keyFilename: '/root/dns-admin.json'
});

console.log('updating for domain: ' + process.env.CERTBOT_DOMAIN);

var zone = dns.zone(domain); // should just be substrait or 'sessions'

zone.getRecords('txt', function (err, records) {

  if (err || !records) {

    return

  }

  challengeName = '_acme-challenge.' + process.env.CERTBOT_DOMAIN + '.'
  records.forEach(function (rec) {

    if (rec.name == challengeName) {

      var newRecords = rec.data.slice(0);
      newRecords.push(process.env.CERTBOT_VALIDATION);
      var newARecord = zone.record('txt', {
        name: '_acme-challenge.' + process.env.CERTBOT_DOMAIN + '.',
        data: newRecords,
        ttl: 5
      });

      var config = {
        add: newARecord,
        delete: rec
      };

      console.log('setting record');
      zone.createChange(config, function(err, change, apiResponse) {

        if (err) {
          return console.error(err);
        }

        console.log(apiResponse);
        console.log('record set');
        console.log ('waiting for propagation');

        // sleep for some amount of time (60 seconds?)
        setTimeout(function () {

          console.log('exiting!');

          // exit
          process.exit(0);

        }, 60000)

      });

    }

  })

})
