/* Written by Will Brickner */

(function (Math) {
    GeoUtil = {
        euclidDistance: function (x1,   y1,   x2,   y2) {   
            var dx = x2 - x1,
                dy = y2 - y1;
             
            return Math.sqrt(dx*dx + dy*dy);
        },
        sphereDistance: function (lat1, lon1, lat2, lon2) {
            var dLat = (lat2 - lat1) * Math.PI / 180
            ,   dLon = (lon2 - lon1) * Math.PI / 180
            ,   a = 0.5 - Math.cos(dLat)/2 + 
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                (1 - Math.cos(dLon))/2;
            
            return 12742000 * Math.asin(Math.sqrt(a));
        },
        kmToMi:      function (km) {
            return km * 0.621371192;
        },
        miToKm:      function (mi) {
            return mi * 1.609344;
        }
    };
})(Math);