import { gql } from "@apollo/client";

// Get data
export const GET_SCHEDULE_USER = gql`
 query getSchedule {
  patients {
    email
    fullName
    id
    occupation
    profileImage {
      url
      id
    }
    weight
    statusAppointment
    sex
    height
    address
    contactNumber
    createdAt
    createSchedules {
      email
      id
      schedule
      scheduleStatus
      time
      contactNumber
      clinician
      room
      location {
        latitude
        longitude
      }
    }
  }
}
`;


