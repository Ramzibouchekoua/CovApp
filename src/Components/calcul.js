function toRad(parms) {
  return (parms * Math.PI) / 180;
}
export const calcul = (lat1, lon1, lon2, lat2) => {
  var R = 6371; // RADIUS_OF_EARTH_IN_KM

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  if (d > 0) return d;
};

export const fakeBackEnd = (originCity, cityDestination, valueIntermidite) => {
  try {
    const arr = [originCity, ...valueIntermidite, cityDestination];
    let cityToCompare = originCity;
    const distance = arr.map((element) => {
      const body = element;
      body.distance = calcul(
        cityToCompare?.lat,
        cityToCompare?.lng,
        element?.lng,
        element?.lat
      );
      cityToCompare = element;
      return body;
    });

    return distance;
  } catch (error) {}
};
