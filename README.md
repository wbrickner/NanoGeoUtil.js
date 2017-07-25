# NanoGeoUtil.js
Compute Euclidean and spherical distances. **CRAZY FAST** (slowest function ~_160 nanoseconds, meaning ~6.5M ops/sec_). **TINY** (_248 bytes gzipped_).

# Quick start
It's as easy as...
```html
<script src="NanoGeoUtil.min.js"></script>
```
# Documentation
### Sphere Distance
The distance between two points on the surface of a sphere (the earth)
```javascript
var distanceInMeters = NanoGeoUtil.sphereDistance(latitudeA, longitudeA, latitudeB, longitudeB);
```
**Performance**: `153.69ns` = `6506604 op/s`
### Euclidean Distance
The distance between two points on a flat plane
```javascript
var distanceInUnits = NanoGeoUtil.euclidDistance(x1, y1, x2, y2);
```
**Performance**: `22.46ns` = `44523597 op/s`

### Kilometers to miles
```javascript
// 10km is 6.21371192mi, so miles will equal 6.21371192
var miles = NanoGeoUtil.kmToMi(10);
```
**Performance**: `17.19ns` = `58173357 op/s`

### Miles to kilometers
```javascript
// 10mi is 16.09344km, so kilometers will equal 16.09344
var kilometers = NanoGeoUtil.miToKm(10);
```
**Performance**: `12.50ns` = `80000000 op/s`

### Performance Note
I've tested performance on my `MacBook Pro (Retina, 13-inch, Late 2012)` (`2.5 GHz Intel Core i5; 8 GB 1600 MHz DDR3`). _Performance may be wildly different on your device_.  If you navigate to the HTML file in the `performance_test` directory, I'd be very interested to hear the results (open the developer console to view them).

# License
No license, please do whatever you like with this code, personal or commercial project. I would love it if you could link back here or give me credit in the form of a small note somewhere, something like "_Uses NanoGeoUtil by Will Brickner_".

Good luck, have fun!
