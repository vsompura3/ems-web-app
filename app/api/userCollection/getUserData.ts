export const getUserData = async (
  registrationNumber: string,
  password: string,
) => {
  const res = await fetch(`${process.env.EMS_BASE_URL}/api/v1/user/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({reg_no: registrationNumber, password: password}),
  })
  const data = await res.json()
  return data
}
