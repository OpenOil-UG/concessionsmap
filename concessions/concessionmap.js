

var map = L.map('map').setView([4.22, 18.35], 3);
filenames = [
    "AO_contracts.geojson",
    "BW.geojson",
    "CD_contracts.geojson",
    "CI.geojson",
    "CM.geojson",
    "ET.geojson",
    "GH_contracts+.geojson",
    "GQ_contracts+.geojson",
    "KE_contracts+.geojson",
    "LR_contracts+.geojson",
    "MG.geojson",
    "ML.geojson",
    "MR_contracts.geojson",
    "MW.geojson",
    "MZ.geojson",
    "NA_contracts.geojson",
    "NE.geojson",
    "NG_contracts+.geojson",
    "SC.geojson",
    "SL.geojson",
    "SN_contracts+.geojson",
    "SS.geojson",
    "ST.geojson",
    "TD_contracts.geojson",
    "TZ_contracts.geojson",
    "UG_contracts+.geojson",
    "ZA.geojson",
    "ZM.geojson"];


var choose_layers = function(){
    // collect filenames for countries
    all_countries = {};
    contracts_countries = {};
    contracts_plus_countries = {};
    filenames.forEach(function(fn){
	iso = fn.split(/[._]/)[0];
	all_countries[iso] = fn;
	if(fn.indexOf('contracts') != -1){
	    contracts_countries[iso] = fn
	}
	if(fn.indexOf('contracts_') != -1){
	    contracts_plus_countries[iso] = fn
	}
    });
    filepaths = []

    var queryDict = {}
    location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
    // no 'c' parameter == return all countries	
    if('c' in queryDict){
	queryDict['c'].toUpperCase().split(',').forEach(
	    function(n){
		if(n in all_countries){
		    filepaths.push('data/' + all_countries[n]);
		}
	    });
    }
    else{
	for(var key in all_countries){
	    filepaths.push('data/' + all_countries[key]);
	}
    }
    return filepaths;		
}


var addLayer = function(layerid){	  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: layerid,
    accessToken: 'pk.eyJ1Ijoib3Blbm9pbCIsImEiOiJVbzF0dUtjIn0.0PfhXizZ9_e1nLH1Dgye9A'
}).addTo(map);
				}

mapbox_layers = [
    'openoil.nklf1hg4', // base layer (terrain only)
];
for(i=0;i<mapbox_layers.length;i++){
    addLayer(mapbox_layers[i]);
}




url_layers = choose_layers();
var concession_map_style = function(feature){
    style = {
	'color': '#0000ee',
    }
    if(feature.properties.Contract){
	style['color'] = '#ee0000';
    }
    return style;
}

var layer_filter = function(feature){
    return feature.properties.Contract;
}
var onEachFeature = function(feature, layer){
    
    
    metadata_order = ['BlockID', 'Block_Name', 'Company', 'Status', 'Type', 'Contract', 'SourceURL', 'SourceDate', 'Timestamp'];
    table_elements = [];

    metadata_order.forEach(function(label){
	value = feature.properties[label];
	if(value){
	    if(['SourceURL', 'Contract'].indexOf(label) != -1){
		//linkify fields that contain links
		value = '<a href="' + value + '">' + value + '</a>';
	    }
	    table_elements.push([label, value]);
	}
    });
    table = '<table>';

    table_elements.forEach(function(e){
	table += '<tr><td>' + e[0] + '</td><td>' + e[1] + '</td></tr>';
    });
    table += '</table>'
    
    layer.bindPopup(table);
}

for(i=0;i<url_layers.length;i++){
    var gjLayer = new L.GeoJSON.AJAX(url_layers[i],{
	onEachFeature: onEachFeature,
	style: concession_map_style,
	//filter: layer_filter
    });
    gjLayer.addTo(map);
}


