/* 
    NanoGeoUtil.js
    
    Written by Will Brickner
*/

(function (Math, window) {
    window.NanoGeoUtil = window.NanoGeoUtil || {        
        euclidDistance: function (xA,   yA,   xB,   yB) {   
            var dx = xB - xA,
                dy = yB - yA;
             
            return Math.sqrt(dx*dx + dy*dy);
        },
        sphereDistance: function (latA, lonA, latB, lonB) {            
            var degToRad = Math.PI / 180
            ,   dLat = (latB - latA) * degToRad
            ,   dLon = (lonB - lonA) * degToRad;
            return 12742000 * Math.asin(Math.sqrt(0.5 - Math.cos(dLat)/2 + Math.cos(latA * degToRad) * Math.cos(latB * degToRad) * (1 - Math.cos(dLon))/2));
        },
        kmToMi: function (km) {
            return km * 0.621371192;
        },
        miToKm: function (mi) {
            return mi * 1.609344;
        }
    };
})(Math, window);