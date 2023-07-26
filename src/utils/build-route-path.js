export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)');
  const pathRegex = new RegExp(`^${pathWithParams}`);
  // ^ = começa com
  // + = um ou mais
  return pathRegex;
}