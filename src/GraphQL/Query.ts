import { gql } from "@apollo/client";

// Get data
export const GET_SCHEDULE_USER = gql`
  query GetPatienList {
    patients {
      address
      contactNumber
      fullName
      email
      id
      occupation
      profileImage {
        url
      }
      sex
      statusAppointment
      height
      dateOfBirth
      weight
      createdAt
    }
  }
`;

export const GET_NEWSCHEDULE_DATA = gql`
  query getNewSchedule {
    newSchedules {
      scheduleStatus
      schedule
      scheduleDate
      room
      id
      contactNumber
      createdAt
      clinician
      time
      location {
        latitude
        longitude
      }
      patients {
        email
        fullName
        id
        profileImage {
          url
          id
        }
      }
    }
  }
`;
