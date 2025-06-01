function camelMatch(queries: string[], pattern: string): boolean[] {
  const patternRegex = new RegExp('^[a-z]*' + pattern.split('').join('[a-z]*') + '[a-z]*$');
  return queries.map((query) => patternRegex.test(query));
};