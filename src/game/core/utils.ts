export function flatten<T>(arr: T[][]): T[] {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      // @ts-ignore
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}
