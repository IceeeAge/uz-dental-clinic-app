import { gql } from "@apollo/client";

//get data
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
    }
  }
`;

export const GET_NEW_SCHEDULE = gql`
  query GetNewSchedule {
    newSchedules {
      id
      email
      location {
        latitude
        longitude
      }
      room
      schedule
      patient {
        id
        statusAppointment
        email
        fullName
        profileImage {
          url
        }
      }
      clinician
      contactNumber
      time
    }
  }
`;
