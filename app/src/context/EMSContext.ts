import {createContext, useReducer} from 'react'

type ActionType = {
  type: string
}
const GET_USER_DATA = 'GET_USER_DATA'
const GET_USER_MESSAGES = 'GET_USER_MESSAGES'
const GET_USER_COURSE_SYLLABUS = 'GET_USER_COURSE_SYLLABUS'
const GET_ANNOUNCEMENTS = 'GET_ANNOUNCEMENTS'
const GET_AUTHORITIES = 'GET_AUTHORITIES'
const GET_USER_ATTENDANCE = 'GET_USER_ATTENDANCE'
const GET_ASSIGNMENT_MARKS = 'GET_ASSIGNMENT_MARKS'
const GET_PENDING_ASSIGNMENTS = 'GET_PENDING_ASSIGNMENTS'
const GET_EXAMS = 'GET_EXAMS'
const GET_USER_CGPA = 'GET_USER_CGPA'
const GET_USER_MARKS = 'GET_USER_MARKS'
const GET_MAKEUP_CLASSES = 'GET_MAKEUP_CLASSES'
const GET_TODAY_TIME_TABLE = 'GET_TODAY_TIME_TABLE'
const GET_TIME_TABLE = 'GET_TIME_TABLE'
const GET_PLACEMENT_DRIVES = 'GET_PLACEMENT_DRIVES'
const GET_HOSTEL_DETAILS = 'GET_HOSTEL_DETAILS'
const GET_HOSTEL_LEAVE_SLIP = 'GET_HOSTEL_LEAVE_SLIP'

const reducer = (state, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {...state, userData: {...state.userData, ...action.payload}}
      break
    case GET_USER_MESSAGES:
      return {
        ...state,
        userMessages: {...state.userMessages, ...action.payload},
      }
      break
    case GET_USER_COURSE_SYLLABUS:
      return {
        ...state,
        userCourseSyllabus: {...state.userCourseSyllabus, ...action.payload},
      }
      break
    case GET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: {...state.announcements, ...action.payload},
      }
      break
    case GET_AUTHORITIES:
      return {
        ...state,
        authorities: {...state.authorities, ...action.payload},
      }
      break
    case GET_USER_ATTENDANCE:
      return {
        ...state,
        userAttendance: {...state.userAttendance, ...action.payload},
      }
      break
    case GET_ASSIGNMENT_MARKS:
      return {
        ...state,
        assignmentMarks: {...state.assignmentMarks, ...action.payload},
      }
      break
    case GET_PENDING_ASSIGNMENTS:
      return {
        ...state,
        pendingAssignments: {...state.pendingAssignments, ...action.payload},
      }
      break
    case GET_EXAMS:
      return {...state, exams: {...state.exams, ...action.payload}}
      break
    case GET_USER_CGPA:
      return {...state, userCGPA: {...state.userCGPA, ...action.payload}}
      break
    case GET_USER_MARKS:
      return {...state, userMarks: {...state.userMarks, ...action.payload}}
      break
    case GET_MAKEUP_CLASSES:
      return {
        ...state,
        makeUpClasses: {...state.makeUpClasses, ...action.payload},
      }
      break
    case GET_TODAY_TIME_TABLE:
      return {
        ...state,
        todayTimeTable: {...state.todayTimeTable, ...action.payload},
      }
      break
    case GET_TIME_TABLE:
      return {...state, timeTable: {...state.timeTable, ...action.payload}}
      break
    case GET_PLACEMENT_DRIVES:
      return {
        ...state,
        placementDrives: {...state.placementDrives, ...action.payload},
      }
      break
    case GET_HOSTEL_DETAILS:
      return {
        ...state,
        hostelDetails: {...state.hostelDetails, ...action.payload},
      }
      break
    case GET_HOSTEL_LEAVE_SLIP:
      return {
        ...state,
        hostelLeaveSlip: {...state.hostelLeaveSlip, ...action.payload},
      }
      break
    default:
      return state
      break
  }
}

const initialState = {
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

const EMSContext = createContext({state: initialState, dispatch: () => null})

export const EMSContextProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <EMSContext.Provider value={{state, dispatch}}>
      {children}
    </EMSContext.Provider>
  )
}
