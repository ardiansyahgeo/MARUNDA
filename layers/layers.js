var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_petadesain_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "peta desain",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/petadesain_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11904087.119815, -683315.387075, 11908390.072234, -680065.014718]
                            })
                        });
var lyr_petastatus_tanah_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "peta status_tanah",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/petastatus_tanah_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11906301.541656, -682647.009724, 11907386.720016, -681201.907537]
                            })
                        });
var format_batas_RT_4 = new ol.format.GeoJSON();
var features_batas_RT_4 = format_batas_RT_4.readFeatures(json_batas_RT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_RT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_RT_4.addFeatures(features_batas_RT_4);
var lyr_batas_RT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_RT_4, 
                style: style_batas_RT_4,
                interactive: true,
                title: '<img src="styles/legend/batas_RT_4.png" /> batas_RT'
            });
var format_batas_rw_5 = new ol.format.GeoJSON();
var features_batas_rw_5 = format_batas_rw_5.readFeatures(json_batas_rw_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_rw_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_rw_5.addFeatures(features_batas_rw_5);
var lyr_batas_rw_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_rw_5, 
                style: style_batas_rw_5,
                interactive: true,
                title: '<img src="styles/legend/batas_rw_5.png" /> batas_rw'
            });
var format_KELURAHAN_6 = new ol.format.GeoJSON();
var features_KELURAHAN_6 = format_KELURAHAN_6.readFeatures(json_KELURAHAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELURAHAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHAN_6.addFeatures(features_KELURAHAN_6);
var lyr_KELURAHAN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KELURAHAN_6, 
                style: style_KELURAHAN_6,
                interactive: true,
                title: '<img src="styles/legend/KELURAHAN_6.png" /> KELURAHAN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_google_1.setVisible(true);lyr_petadesain_2.setVisible(true);lyr_petastatus_tanah_3.setVisible(true);lyr_batas_RT_4.setVisible(false);lyr_batas_rw_5.setVisible(true);lyr_KELURAHAN_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_google_1,lyr_petadesain_2,lyr_petastatus_tanah_3,lyr_batas_RT_4,lyr_batas_rw_5,lyr_KELURAHAN_6];
lyr_batas_RT_4.set('fieldAliases', {'WADMRW': 'WADMRW', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'RT': 'RT', });
lyr_batas_rw_5.set('fieldAliases', {'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'RW': 'RW', });
lyr_KELURAHAN_6.set('fieldAliases', {'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'KDEPUM': 'KDEPUM', 'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_batas_RT_4.set('fieldImages', {'WADMRW': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'RT': 'TextEdit', });
lyr_batas_rw_5.set('fieldImages', {'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'RW': 'TextEdit', });
lyr_KELURAHAN_6.set('fieldImages', {'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_batas_RT_4.set('fieldLabels', {'WADMRW': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'RT': 'no label', });
lyr_batas_rw_5.set('fieldLabels', {'WADMKD': 'no label', 'WADMKC': 'no label', 'RW': 'no label', });
lyr_KELURAHAN_6.set('fieldLabels', {'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'KDEPUM': 'no label', 'KDCPUM': 'no label', 'KDPKAB': 'no label', 'LUASWH': 'no label', 'SRS_ID': 'no label', });
lyr_KELURAHAN_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});