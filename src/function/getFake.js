export const getFake = async (url) => {
  const resp = await fetch(url)
  const fake = await resp.json()
  return fake
}
