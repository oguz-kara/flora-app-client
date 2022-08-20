function convertToReactSelectOption(obj) {
  if (!(obj && obj.id))
    throw new Error(
      'You must provide an object and this object must contain id property!'
    );
  if (!(obj && obj.name))
    throw new Error(
      'You must provide an object and this object must contain name property!'
    );
  return {
    value: obj.id,
    label: obj.name,
  };
}

export default function convertListToReactSelectOption(list) {
  if (!Array.isArray(list))
    throw new Error(
      'You must provide an object to convertListToReactSelectOption function!'
    );

  return list.map((item) => convertToReactSelectOption(item));
}
