// Fetch User Data
export const getUserData = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/login`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reg_no: registrationNumber, password: password }),
    },
  )
  const data = await res.json()
  return data
}

// Fetch Time Table
export const getTimeTable = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/timetable/classes`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reg_no: registrationNumber, password: password }),
    },
  )
  const data = await res.json()
  return data
}

// Fetch Announcements
export const getAnnouncements = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/annoucements/`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reg_no: registrationNumber, password: password }),
    },
  )
  const data = await res.json()
  return data
}
