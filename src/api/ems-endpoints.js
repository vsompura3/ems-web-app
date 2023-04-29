/* 
! User Routes
*/
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

// Fetch user details
export const getUser = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user`,
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

// Fetch user messages
export const getUserMessages = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/messages`,
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

// Fetch user syllabus
export const getUserSyllabus = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/syllabus`,
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

// Fetch authorities
export const getUserAuthorities = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/authorities`,
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

// Fetch attendance
export const getUserAttendance = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/attendance`,
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

// Fetch assignments
export const getUserAssignments = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/assignments`,
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

// Fetch exams
export const getUserExams = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/exams`,
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

// Fetch pending assignments
export const getUserPendingAssignments = async (
  registrationNumber,
  password,
) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/pending_assignments`,
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

// Fetch cgpa
export const getUserCGPA = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/cgpa`,
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

// Fetch marks
export const getUserMarks = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/user/marks`,
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

/* 
! Announcements
*/
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

/* 
! Time-Table
*/
// Fetch Makeup Classes
export const getMakeupClasses = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/timetable/makeup`,
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

// Fetch Today Classes
export const getTodayClasses = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/timetable/today`,
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

/* 
! Hostel Routes
*/
// Fetch Hostel Details
export const getHostelData = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/hostel/`,
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

// Fetch Leave Slips
export const getHostelLeaveSlip = async (registrationNumber, password) => {
  const res = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/api/v1/hostel/leave_slip`,
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
