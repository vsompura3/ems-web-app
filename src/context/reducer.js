import {
  GET_ANNOUNCEMENTS,
  GET_ASSIGNMENT_MARKS,
  GET_AUTHORITIES,
  GET_EXAMS,
  GET_HOSTEL_DETAILS,
  GET_HOSTEL_LEAVE_SLIP,
  GET_MAKEUP_CLASSES,
  GET_PENDING_ASSIGNMENTS,
  GET_PLACEMENT_DRIVES,
  GET_TIME_TABLE,
  GET_TODAY_TIME_TABLE,
  GET_USER_ATTENDANCE,
  GET_USER_CGPA,
  GET_USER_COURSE_SYLLABUS,
  GET_USER_DATA,
  GET_USER_MARKS,
  GET_USER_MESSAGES,
} from './action.types'

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, userData: { ...state.userData, ...action.payload } }
    case GET_USER_MESSAGES:
      return {
        ...state,
        userMessages: { ...state.userMessages, ...action.payload },
      }
    case GET_USER_COURSE_SYLLABUS:
      return {
        ...state,
        userCourseSyllabus: { ...state.userCourseSyllabus, ...action.payload },
      }
    case GET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: { ...state.announcements, ...action.payload },
      }
    case GET_AUTHORITIES:
      return {
        ...state,
        authorities: { ...state.authorities, ...action.payload },
      }
    case GET_USER_ATTENDANCE:
      return {
        ...state,
        userAttendance: { ...state.userAttendance, ...action.payload },
      }
    case GET_ASSIGNMENT_MARKS:
      return {
        ...state,
        assignmentMarks: { ...state.assignmentMarks, ...action.payload },
      }
    case GET_PENDING_ASSIGNMENTS:
      return {
        ...state,
        pendingAssignments: { ...state.pendingAssignments, ...action.payload },
      }
    case GET_EXAMS:
      return { ...state, exams: { ...state.exams, ...action.payload } }
    case GET_USER_CGPA:
      return { ...state, userCGPA: { ...state.userCGPA, ...action.payload } }
    case GET_USER_MARKS:
      return { ...state, userMarks: { ...state.userMarks, ...action.payload } }
    case GET_MAKEUP_CLASSES:
      return {
        ...state,
        makeUpClasses: { ...state.makeUpClasses, ...action.payload },
      }
    case GET_TODAY_TIME_TABLE:
      return {
        ...state,
        todayTimeTable: { ...state.todayTimeTable, ...action.payload },
      }
    case GET_TIME_TABLE:
      return { ...state, timeTable: { ...state.timeTable, ...action.payload } }
    case GET_PLACEMENT_DRIVES:
      return {
        ...state,
        placementDrives: { ...state.placementDrives, ...action.payload },
      }
    case GET_HOSTEL_DETAILS:
      return {
        ...state,
        hostelDetails: { ...state.hostelDetails, ...action.payload },
      }
    case GET_HOSTEL_LEAVE_SLIP:
      return {
        ...state,
        hostelLeaveSlip: { ...state.hostelLeaveSlip, ...action.payload },
      }
    default:
      return state
  }
}
