export const getUserData = async (username = 'vsompura3') => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()
  return data
}
