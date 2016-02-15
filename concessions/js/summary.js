/* Admin scripts
   for use from the Node console
 */

var fs = require('fs');

var count_contracts = function(fn){
    var doc = JSON.parse(fs.readFileSync(fn, 'utf-8'));
    total = 0
    doc['features'].forEach(function(n){
	if(n['properties']['Contract'] !== null){
	    total += 1;
	}
    });
    return total;
}

filenames_asia = [
	"AZ.geojson",
	"BD.geojson",
	"BN.geojson",
	"CN.geojson",
	"ID.geojson",
	"IN.geojson",
	"KH.geojson",
	"KZ.geojson",
	"KR.geojson",
	"MM.geojson",
	"MN.geojson",
	"MTJ.geojson",
	"MY.geojson",
	"PG.geojson",
	"PH.geojson",
	"PK.geojson",
	"TH.geojson",
	"TL.geojson",
	"TM.geojson",
	"VN.geojson",
    ]

var count_asia_contracts = function(){
    var total = 0;
    filenames_asia.forEach(function(partfn){
	fullfn = '../data/' + partfn;	
	this_country = count_contracts(fullfn);
	console.log(partfn, this_country);
	total += this_country;
    });
    return total;
}

