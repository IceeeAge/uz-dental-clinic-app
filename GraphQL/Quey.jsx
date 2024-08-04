

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
    }
  }
`;