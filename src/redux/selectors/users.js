export const selectUsers = (users, criteria) => {
  if (
    !criteria ||
    !criteria.region ||
    !criteria.country ||
    !criteria.country.name
  ) {
    return [];
  }
  return users.filter(
    user =>
      user.region.startsWith(criteria.region) ||
      user.user_tags.countries[0].name.startsWith(criteria.country.name),
  );
};
