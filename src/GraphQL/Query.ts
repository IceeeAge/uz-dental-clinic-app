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
      scheduleDate
      room
      id
      contactNumber
      createdAt
      email
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
export const GET_SLIDER_DATA = gql`
  query getSlider {
    getSliders {
      id
      image {
        url
      }
      name
    }
  }
`;

export const GET_MEDICAL_TEAM_DATA = gql`
  query getMedicalTeam {
    medicalTeams {
      id
      title
      aboutDoctor
      profileImage {
        url
        id
      }
      fullName
      email
      location {
        latitude
        longitude
      }
      phoneNumber
    }
  }
`;

export const GET_TIPSGUIDE_DATA = gql`
  query GET_TIPSGUIDE_DATA {
    tipsGuides {
      id
      image {
        url
      }
      description
    }
  }
`;
export const GET_UZLABS_DATA = gql`
  query GETUZLABS_DATA {
    uzLabs {
      address
      email
      id
      images {
        url
        id
      }
      location {
        latitude
        longitude
      }
      name
      phone
    }
  }
`;
export const GET_NEWSFEED_DATA = gql`
query GetNewsFeed {
  newsFeeds {
    title
    id
    description
    images {
      url
    }
  }
}
`;


export const GET_DATA_CHARTTING = gql`
  query GetDataChartting($email: String!) {
    newSchedules {
      charting {
        url(transformation: { document: { output: { format: png } } })
      }
      patients(where: { email: $email }) {
        id
      }
    }
  }
`;
