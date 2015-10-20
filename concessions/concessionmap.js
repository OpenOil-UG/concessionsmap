

/* ALL THE COLORS WE TRIED
COLOR1 = 'hsla(192, 100%, 75%, 1)';
COLOR2 = 'hsla(87, 54%, 42%, 1)';

COLOR1 = '#D95F02';
//COLOR2 = '#1B9E77';
COLOR1 = '#FC8D62';
COLOR2 = '#66C2A5';

COLOR1 = '#FC8D62'; // dark
COLOR1 = '#CC0066'; // PINK!!!
COLOR1 = '#D63385';
COLOR1 = '#E066A3';
COLOR2 = '#7570B3'; // lilac
COLOR2 = '#66FF33'; // green
*/

// Daniel's last proposal

COLOR2 = '#5ab4ac';

COLOR2 = '#E066A3'; // lilac

COLOR1 = '#d8b365';
COLOR2 = '#00FF00';

var map = L.map('map', {
    fullscreenControl: true
}).setView([4.22, 18.35], 3);
$(window).on("resize", function() {
    $("#map").height($(window).height() - 150);
    map.invalidateSize();
}).trigger("resize");

 map.addControl( new L.Control.Search({
    collapsed: true,
    wrapper: 'search',
    url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    propertyLoc: ['lat','lon'],
    autoType: false,
    //zoom: 10,
    text: 'Search...'
}));

filenames = [
    "AO_contracts.geojson",
    "BJ_contracts+.geojson",
    "BW.geojson",
    "CD_contracts.geojson",
    "CG_contracts+.geojson",
    "CI.geojson",
    "CM.geojson",
    "ET.geojson",
    "GA_contracts+.geojson",
    "GH_contracts+.geojson",
    "GM_contracts.geojson",
    "GN_contracts+.geojson",
    "GQ_contracts+.geojson",
    "GW.geojson",
    "KE_contracts+.geojson",
    "LR_contracts+.geojson",
    "MG.geojson",
    "ML.geojson",
    "MR_contracts.geojson",
    "MW.geojson",
    "MZ_contracts.geojson",
    "NA_contracts.geojson",
    "NE.geojson",
    "NG_contracts+.geojson",
    "SC.geojson",
    "SL.geojson",
    "SN_contracts+.geojson",
    "SS.geojson",
    "ST.geojson",
    "TD_contracts.geojson",
    "TG.geojson",
    "TZ_contracts.geojson",
    "UG_contracts+.geojson",
    "ZA.geojson",
    "ZM.geojson"];

country_codes = {"AF":"Afghanistan","AX":"Åland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia (Plurinational State of)","BQ":"Bonaire, Sint Eustatius and Saba","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo (Democratic Republic of the)","CK":"Cook Islands","CR":"Costa Rica","CI":"Côte d'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Curaçao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and McDonald Islands","VA":"Holy See","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran (Islamic Republic of)","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Korea (Democratic People's Republic of)","KR":"Korea (Republic of)","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MK":"Macedonia (the former Yugoslav Republic of)","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia (Federated States of)","MD":"Moldova (Republic of)","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestine, State of","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Réunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","BL":"Saint Barthélemy","SH":"Saint Helena, Ascension and Tristan da Cunha","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin (French part)","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten (Dutch part)","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan, Province of China","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom of Great Britain and Northern Ireland","US":"United States of America","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela (Bolivarian Republic of)","VN":"Viet Nam","VG":"Virgin Islands (British)","VI":"Virgin Islands (U.S.)","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"};

legends = {}

var build_legend = function(labels){
    control =  L.control({
	'position': 'bottomright'})
    control.onAdd = function(map){
	var div = L.DomUtil.create('div', 'info legend');
	for(i=0;i<labels.length;i++){
	    div.innerHTML += "<i style='background:" + labels[i][0] + "'></i>" + labels[i][1] + "<br/>";
	}
    return div;
    }
    return control
}

legends['contract'] = build_legend(
    [[COLOR1, 'No contract'],
     [COLOR2, 'Contract']]
)

legends['company'] = build_legend(
    [['#ee0000', 'No company known'],
     ['#0000ee', 'Company information available']]
)
legends['status'] = build_legend(
    [['#ee0000', 'Open'],
     ['#0000ee', 'Exploration or production']]
)

legends['contract'].addTo(map);

all_countries = {};

var choose_layers = function(){
    // collect filenames for countries
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

var add_country_links = function(){
    links = []
    links.push('<a href="?" >All</a>')
    for(key in all_countries){
	links.push('<a href="?c=' + key + '" >' + country_codes[key] + '</a>')
    }
    $('#single_country_links').html(links.join(' | '));
    return links.join()
}
$(document).ready(add_country_links);

// var addLayer = function(layerid){	  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: layerid,
//     accessToken: 'pk.eyJ1Ijoib3Blbm9pbCIsImEiOiJVbzF0dUtjIn0.0PfhXizZ9_e1nLH1Dgye9A'
// }).addTo(map);
// 				}

// ---------------------------------------------------------------------

var mapboxAttribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
var accessToken = 'pk.eyJ1Ijoib3Blbm9pbCIsImEiOiJVbzF0dUtjIn0.0PfhXizZ9_e1nLH1Dgye9A'
var mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'

var streets   = L.tileLayer(mapboxUrl, {id: 'openoil.nklf1hg4', accessToken: accessToken, attribution: mapboxAttribution}),
    satellite = L.tileLayer(mapboxUrl, {id: 'openoil.nobc1l70', accessToken: accessToken, attribution: mapboxAttribution});

//var map = L.map('map', {
//    center: [39.73, -104.99],
//    zoom: 10,
//    layers: [grayscale, cities]
//});

var baseMaps = {
    "Streets": streets,
    "Satellite": satellite
};

baseMaps.Streets.addTo(map);
L.control.layers(baseMaps).addTo(map);

// ---------------------------------------------------------------------

url_layers = choose_layers();

var basestyle = {
    'color': COLOR1,//'hsla(192, 100%, 50%, 1)',
    'stroke': 1,
    'weight': 1,
    }

var concession_map_style_contract = function(feature){
    style = JSON.parse(JSON.stringify(basestyle));

    if(feature.properties.Contract){
	//style['color'] =  'hsla(192, 100%, 20%, 1)';
	style['color'] = COLOR2;
	}
    return style
}

var concession_map_style_company = function(feature){
    style = JSON.parse(JSON.stringify(basestyle));

    if(feature.properties.Contract){
	//style['color'] =  'hsla(192, 100%, 20%, 1)';
	style['color'] = COLOR2;
	}
    return style
}

var concession_map_style_status = function(feature){
    style = JSON.parse(JSON.stringify(basestyle));

    if(feature.properties.Status.indexOf('Open') == -1){
	//style['color'] =  'hsla(192, 100%, 20%, 1)';
	style['color'] = COLOR2;
	}
    return style
}


var layer_filter = function(feature){
    return feature.properties.Contract;
}
var onEachFeature = function(feature, layer){

    metadata_prettynames = {
	'BlockName': 'Block Name',
	'SourceURL': 'Source',
	'SourceDate': 'Source Date'}

    metadata_order = ['BlockName', 'Country', 'Company', 'Status', 'Type', 'Contract', 'SourceURL', 'SourceDate'];
    table_elements = [];

    metadata_order.forEach(function(label){
	display_label = metadata_prettynames[label] || label

	value = feature.properties[label];
	if(label == 'Country'){
	    ccod = (feature.properties['BlockID'] || '').split('/')[0];
	    value = country_codes[ccod];
	}
	if(value){
	    if(label == 'SourceURL'){
		value = '<a href="' + value + '" target="_blank">Link</a>';
	    }
	    if(label == 'Contract'){
		value = '<a href="' + value + '" target="_blank">Available</a>';
	    }

	    /*if(['SourceURL', 'Contract'].indexOf(label) != -1){
		//linkify fields that contain links
		value = '<a href="' + value + '" target="_blank">Available</a>';
	    }*/
	    table_elements.push([display_label, value]);
	}

	else{
	    table_elements.push([display_label, '']);
	}
    });
    table = '<table>';

    table_elements.forEach(function(e){
	table += '<tr><td class="popuplabel">' + e[0] + '</td><td>' + e[1] + '</td></tr>';
    });
    table += '</table>'

    layer.bindPopup(table);
}

concession_layers = L.layerGroup();

var buildMap = function(){
//    mapbox_layers = [
//	'openoil.nklf1hg4', // base layer (terrain only)
//    ];
//    for(i=0;i<mapbox_layers.length;i++){
//	addLayer(mapbox_layers[i]);
//    }



    for(i=0;i<url_layers.length;i++){
	var gjLayer = new L.GeoJSON.AJAX(url_layers[i],{
	    onEachFeature: onEachFeature,
	    style: concession_map_style_contract,
	});
	gjLayer.addEventListener('click', function(e){
	    try{
		if(e.layer.feature) clicklabel = e.layer.feature.properties.BlockID;
		else clicklabel = 'unknown block';
		ga('send', 'event', 'map', 'click_block', clicklabel);
	    }
	    catch(err){
		console.log('unable to track click');
	    }
	});
	concession_layers.addLayer(gjLayer);
    }

    concession_layers.addTo(map);
    if(choose_layers().length == 1){
	// Hideous hack. layer.getBounds() will only work once the
	    setTimeout(function(){
		concession_layers.eachLayer(
		    function(x){map.fitBounds((x.getBounds()))})
	    }, 1000);
	}
}

buildMap();

var switch_to_contracts = function(){
    return switch_to(concession_map_style_contract, 'contract');
}
var switch_to_company = function(){
    return switch_to(concession_map_style_company, 'company');
}
var switch_to_status = function(){
    return switch_to(concession_map_style_status, 'status');
}



var switch_to = function(stylefunc, legendname){
    concession_layers.eachLayer(
	function(layer){
	    layer.setStyle(stylefunc);
	}
    );
    for(var key in legends){
	if(legends[key]._map){
	    legends[key].removeFrom(map);
	}
    }
    legends[legendname].addTo(map);
}
