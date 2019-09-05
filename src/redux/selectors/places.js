export const getVisiblePlaces = (places, searchString) => {
  if (!searchString || searchString.length < 4) {
    return [];
  }
  const loweredSearchString = searchString.toLowerCase();
  return places.filter(place => {
    return (
      place.region
        .toLowerCase()
        .startsWith(searchString.toLowerCase(loweredSearchString)) ||
      place.country.name
        .toLowerCase()
        .startsWith(searchString.toLowerCase(loweredSearchString))
    );
  });
};
