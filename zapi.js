var method = zapi.prototype;

const request = require('request');

function zapi() {
	
}

method.accountRequest = function(address) {
    request('https://api.zcha.in/v2/mainnet/accounts/'+address+'/recv?limit=20&offset=0', { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        else {
			return console.log(body);
        }
    });
};

// ToDo: if result contains more than 20 outputs, detect it and take appropriate action

// zapi.accountRequest('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd')

module.exports = zapi;