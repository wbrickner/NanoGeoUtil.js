var trialCount = 100
,   avgSphereTime
,   avgEuclidTime
,   avgKmToMiTime
,   avgMiToKmTime;

document.getElementById('test-btn').onclick = function () {
    if (!this.hasAttribute('disabled')) {
        this.setAttribute('disabled', 'true');
        test ();
        this.removeAttribute('disabled');
    }
}

function test () {
    console.log("Testing performance... This could take a while...");
    
    /* --- Testing sphereDistance --- */
    console.log("\tTesting NanoGeoUtil.sphereDistance...");
    var times = [];
    for (var trial = 0; trial < trialCount; ++trial) {
        var startTime = performance.now();
        for (var t = 0; t < 1e6; t++) {
            NanoGeoUtil.sphereDistance(22.346354, 92.238412, 72.201299, -42.238401);    
        }
        var endTime = performance.now();
        
        // push the average time to the array
        times.push((endTime - startTime) / 1e6);
    }
    var avg = 0;
    for(var k = 0, len = times.length; k < len; ++k) {
        avg += times[k];
    }
    avgSphereTime = avg / trialCount;
    
    /* --- Testing euclidDistance --- */
    console.log("\tTesting NanoGeoUtil.euclidDistance...");
    var times = [];
    for (var trial = 0; trial < trialCount; ++trial) {
        var startTime = performance.now();
        for (var t = 0; t < 1e6; t++) {
            NanoGeoUtil.euclidDistance(22.346354, 92.238412, 72.201299, -42.238401);    
        }
        var endTime = performance.now();
        
        // push the average time to the array
        times.push((endTime - startTime) / 1e6);
    }
    var avg = 0;
    for(var k = 0, len = times.length; k < len; ++k) {
        avg += times[k];
    }
    avgEuclidTime = avg / trialCount;
    
    /* --- Testing kmToMi --- */
    console.log("\tTesting NanoGeoUtil.kmToMi...");
    var times = [];
    for (var trial = 0; trial < trialCount; ++trial) {
        var startTime = performance.now();
        for (var t = 0; t < 1e6; t++) {
            NanoGeoUtil.kmToMi(22.346354);    
        }
        var endTime = performance.now();
        
        // push the average time to the array
        times.push((endTime - startTime) / 1e6);
    }
    var avg = 0;
    for(var k = 0, len = times.length; k < len; ++k) {
        avg += times[k];
    }
    avgKmToMiTime = avg / trialCount;
    
    /* --- Testing miToKm --- */
    console.log("\tTesting NanoGeoUtil.miToKm...");
    var times = [];
    for (var trial = 0; trial < trialCount; ++trial) {
        var startTime = performance.now();
        for (var t = 0; t < 1e6; t++) {
            NanoGeoUtil.miToKm(22.346354);    
        }
        var endTime = performance.now();
        // push the average time to the array
        times.push((endTime - startTime) / 1e6);
    }
    var avg = 0;
    for(var k = 0, len = times.length; k < len; ++k) {
        avg += times[k];
    }
    avgMiToKmTime = avg / trialCount;
    
    /* --- Present Results --- */
    console.info("Results: (please note all results are in milliseconds)");
    console.info("\tNanoGeoUtil.sphereDistance:\t" + avgSphereTime.toFixed(8) + "ms");
    console.info("\tNanoGeoUtil.euclidDistance:\t" + avgEuclidTime.toFixed(8) + "ms");
    console.info("\tNanoGeoUtil.kmToMi:\t\t\t"     + avgKmToMiTime.toFixed(8) + "ms");
    console.info("\tNanoGeoUtil.miToKm:\t\t\t"     + avgMiToKmTime.toFixed(8) + "ms");
}
