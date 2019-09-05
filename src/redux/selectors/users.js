const selectUsers = (users, criteria) => {
  return users.filter(
    user =>
      user.region.startsWith(criteria.region) ||
      user.user_tags.countries[0].name.startsWith(criteria.country.name),
  );
};
