export const getVisiblePlaces = (places, searchString) => {
  if (!searchString || searchString.length < 4) {
    return [];
  }
  return places.filter(place => {
    return (
      place.region.startsWith(searchString) ||
      place.country.startsWith(searchString)
    );
  });
};
