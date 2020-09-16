// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const findReactElement = node => {
  const element = Object.keys(node)
    .filter(key => key.startsWith('__reactInternalInstance$'))
    // eslint-disable-next-line no-underscore-dangle
    .map(key => node[key]._debugOwner);
  return (element.length && element[0]) || undefined;
};
