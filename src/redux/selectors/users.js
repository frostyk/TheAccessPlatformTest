export const selectUsers = (users, criteria) => {
  if (!criteria || !criteria.country || !criteria.country.name) {
    return [];
  }

  if (!criteria.region) {
    return users.filter(user => {
      return user.user_tags.countries[0].name.startsWith(criteria.country.name);
    });
  }

  return users.filter(
    user =>
      user.region.startsWith(criteria.region) ||
      user.user_tags.countries[0].name.startsWith(criteria.country.name),
  );
};
