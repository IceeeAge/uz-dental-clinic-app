import { gql } from "@apollo/client";

// Get data
export const GET_SCHEDULE_USER = gql`
query GetPatienList {
  patients(orderBy: updatedAt_DESC) {
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
    active
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
  query GetNewsFeedData {
    newsFeeds(orderBy: createdAt_DESC) {
      id
      title
      description
      images {
        url
      }
      createdAt
    }
  }
`;

export const GET_DATA_CHARTTING = gql`
query GetUserDataChartting($email: String!) {
  patients(where: {email: $email}) {
    newSchedules {
      charting {
        url(transformation: {document: {output: {format: png}}})
      }
        id
      clinician
    }
    createdAt
    fullName
    id
    email
  }
}
`;

export const GET_USER_PERSONAL_INFORMATION = gql`
  query GetUserPersonalInformation($email: String!) {
    patients(where: { email: $email }) {
      id
      fullName
      contactNumber
      dateOfBirth
      height
      weight
      sex
      occupation
      emergencyContactName
      relationship
      relationshipNumber
      extraEmergencyContactName
      secondRelationshipNumber
      coughduration
      coughWithBlood
      beenExposed
      tuberculosis
      extraRelationship
    }
  }
`;

export const GET_USER_DENTAL_INFORMATION = gql`
  query GetUserDentalInformation($email: String!) {
    patients(where: { email: $email }) {
      id
      fullName
      bleedingGums
      sensitive
      foodTrap
      dryMouth
      pastGap
      pastOrthodonic
      problem
      earaches
      clicking
      bruxing
      sores
      dentures
      active
      serious
      dateOfLastExam
    }
  }
`;

export const GET_USER_MEDICAL_INFORMATION = gql`
  query GetUserMedicalInformation($email: String!) {
    patients(where: { email: $email }) {
      id
      careOfAPhysicians
      physiciansName
      phonePhysician
      areYouInGoodHealth
      anyChangesInYourHealth
      hospitalization
      prescriptionOrCounterMedications
      allergies
      specify
      alcoholIntake
      amoutAndFrequency
      forWomen
      lactating
      ifYesWhatWasTheIllnessOrProblem
      dateOfLastPhysicalExam
      vitaminsNaturalOrHerbalSupplements
    }
  }
`;

export const GET_USER_QUESTIONNAIRE = gql`
  query GetUserQuestionnaire($email: String!) {
    patients(where: { email: $email }) {
      id
      fullName
      highBloodPressure
      heartAttack
      heartDisease
      heartDiseaseSpecify
      lowBloodPressure
      leukemia
      anemia
      kidneyDisease
      kidneyDiseaseSpecify
      asthma
      lungDisease
      lungDiseaseSpecify
      stroke
      neurologicalDisorder
      neurologicalDisorderSpecify
      epilepsyConvulsions
      brainInjury
      psychiatricTreatment
      diabetes
      aidsHivInfection
      congenitalDisease
      congenitalDiseaseSpecify
      hepatitis
      liverDisorder
      livErDisorderSpecify
      jointDisorder
      jointReplacementOrImplants
      steroidTherapy
      stomachTroublesUlcers
      chestPains
      frequentSoreThroat
      persistentCough
      difficultInBreathing
      cancerOrTumor
      radiationOrChemotherapy
      recentWEightLoss
      others
      othersSpecify
    }
  }
`;

export const EformPDF = gql`
  query EFormPDF($email: String!) {
    requestUserEformPdfs(where: { email: $email }) {
      eFormPdf {
        url
      }
      email
      fullName
      id
      createdAt
      requestUserEformPdf
    }
  }
`;

export const CHECK_USER_APPOINTMENT = gql`
  query CheckIfUserAlreadyAppointment($email: String!) {
    patients(where: { email: $email }) {
      address
      createdAt
      fullName
      id
      email
      contactNumber
      dateOfBirth
      statusAppointment
    }
  }
`;

export const CHECK_2d_CHART_ID = gql`
query getcreate2dChartData {
  uzDentalCharts {
    id
    email
    fullName
    tooth48
    tooth47
    tooth46
    tooth45
    tooth44
    tooth43
    tooth42
    tooth41
    tooth31
    tooth32
    tooth33
    tooth34
    tooth35
    tooth36
    tooth37
    tooth38
    tooth11
    tooth12
    tooth13
    tooth14
    tooth15
    tooth16
    tooth17
    tooth18
    tooth21
    tooth22
    tooth23
    tooth24
    tooth25
    tooth26
    tooth27
    tooth28
    createdAt
  }
}
`;

