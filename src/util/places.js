export const parsePlaces = (users = []) => {
  let arr = users.map(u => {
    return {
      region: u.region,
      country: u.user_tags.countries[0],
    };
  });
  let result = [];
  let map = new Map();
  for (const item of arr) {
    if (!map.has(item.region)) {
      map.set(item.region, true); // set any value to Map
      result.push({
        region: item.region,
        country: item.country,
      });
    }
  }
  return result;
};
