calculateDistance = (position1, position2) => {
    // console.log('sdfsfsfsf')
    var Radius = 6371; 
    var distanceLat = (position1.lat - position2.lat) * Math.PI / 180;
    var distanceLon = (position1.long - position2.long) * Math.PI / 180;
    var a = Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
        Math.cos(position1.lat * Math.PI / 180) * Math.cos(position2.lat * Math.PI / 180) *
        Math.sin(distanceLon / 2) * Math.sin(distanceLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var distance = Radius * c;
    return distance;
};

module.exports = calculateDistance;