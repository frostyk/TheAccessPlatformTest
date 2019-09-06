export const getVisiblePlaces = (places, searchString) => {
  if (!searchString || searchString.length < 4) {
    return [];
  }
  const loweredSearchString = searchString.toLowerCase();
  const placesWithRegions = places.filter(place => {
    return (
      place.region
        .toLowerCase()
        .startsWith(searchString.toLowerCase(loweredSearchString)) ||
      place.country.name
        .toLowerCase()
        .startsWith(searchString.toLowerCase(loweredSearchString))
    );
  });
  if (placesWithRegions.length > 0) {
    placesWithRegions.unshift({
      region: '',
      country: {
        name: placesWithRegions[0].country.name,
      },
    });
  }
  return placesWithRegions;
};
