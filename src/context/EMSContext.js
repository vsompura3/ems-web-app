import { createContext } from 'react'

export const initialState = {
  userCred: {},
  userData: {},
  userMessages: {},
  userCourseSyllabus: {},
  announcements: {},
  authorities: {},
  userAttendance: {},
  assignmentMarks: {},
  pendingAssignments: {},
  exams: {},
  userCGPA: {},
  userMarks: {},
  makeUpClasses: {},
  todayTimeTable: {},
  timeTable: {},
  placementDrives: {},
  hostelDetails: {},
  hostelLeaveSlip: {},
}

export const EMSContext = createContext({ state: {}, dispatch: () => {} })
