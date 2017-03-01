# GeoUtil.js
Compute Euclidean and spherical distances. Efficient (**2-5us speed**). Tiny. (**228 bytes gzipped**)

# Quick start

It's as easy as...
```html
<script src="GeoUtil.min.js"></script>
```
# Documentation
### Sphere Distance
The distance between two points on the surface of a sphere (the earth)
```javascript
var distanceInMeters = GeoUtil.sphereDistance(latitudeA, longitudeA, latitudeB, longitudeB);
```

### Euclidean Distance
The distance between two points on a flat plane
```javascript
var distanceInUnits = GeoUtil.euclidDistance(x1, y1, x2, y2);
```

### Kilometers to miles
```javascript
// 10km is 6.21371192mi, so miles will equal 6.21371192
var miles = GeoUtil.kmToMi(10);
```

### Miles to kilometers
```javascript
// 10mi is 16.09344km, so kilometers will equal 16.09344
var kilometers = GeoUtil.miToKm(10);
```
# License
No license, please do whatever you like with this code, personal or commercial.  
I would love it if you could link back here or give me credit, but I don't run things.

Have fun!
