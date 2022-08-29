export function getDataIfExists(response) {
  try {
    const data = response && response.data && response.data.data;
    return data;
  } catch (err) {
    return false;
  }
}
