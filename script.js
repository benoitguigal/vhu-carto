
var mymap = L.map('map').setView([46.3239455, -0.4645212], 8);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVub2l0Z3VpZ2FsIiwiYSI6ImNqdThob2Y5MDA5Zmg0NG4wMHg4Ynl0MHgifQ.CpODeh1akjBOEIXye5JXcQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVub2l0Z3VpZ2FsIiwiYSI6ImNqdThob2Y5MDA5Zmg0NG4wMHg4Ynl0MHgifQ.CpODeh1akjBOEIXye5JXcQ'
}).addTo(mymap);


$.getJSON("data/vhu_x_sirene.json", function(data) {
    data.forEach(function(record) {
        if (record.latitude && record.longitude) {
            var marker = L.marker([record.latitude, record.longitude]).addTo(mymap)
            var label = record.raison_sociale;
            marker.bindPopup(label)
        }
    })
});