//update,delete,create data
import { gql } from "@apollo/client";

export const CREATE_PATIENT_MUTATION = gql`
  mutation CreatePatient(
    $profileImage: String!
    $email: String!
    $fullName: String!
    $contactNumber: String!
    $sex: String!
    $dateOfBirth: String!
    $address: String
    $height: String
    $occupation: String
    $weight: String
    $statusAppointment: String!
  ) {
    createPatient(
      data: {
        profileImage: { create: { uploadUrl: $profileImage } }
        email: $email
        fullName: $fullName
        contactNumber: $contactNumber
        sex: $sex
        dateOfBirth: $dateOfBirth
        address: $address
        height: $height
        occupation: $occupation
        weight: $weight
        statusAppointment: $statusAppointment
      }
    ) {
      id
    }

    publishManyPatients(to: PUBLISHED) {
      count
    }
  }
`;

export const UPDATE_PATIENT_INFORMATION = gql`
  mutation UpdatePatientInformation($id: ID!, $data: PatientUpdateInput!) {
    updatePatient(where: { id: $id }, data: $data) {
      id
      dateOfBirth
      fullName
      contactNumber
      sex
      occupation
      emergencyContactName
      relationship
      relationshipNumber
      extraEmergencyContactName
      extraRelationship
      secondRelationshipNumber
      address
      beenExposed
      coughWithBlood
      coughduration
      height
      weight
      tuberculosis
    }
    publishManyPatientsConnection {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const UPDATE_PATIENT_DENTAL_INFORMATION = gql`
  mutation UpdatePatientDentalInformation(
    $id: ID!
    $data: PatientUpdateInput!
  ) {
    updatePatient(where: { id: $id }, data: $data) {
      id
      id
      fullName
      bleedingGums
      sensitive
      foodTrap
      dryMouth
      pastGap
      pastOrthodonic
      problem
      clicking
      bruxing
     sores
      dentures
      active
      serious
      dateOfLastExam
    }
    publishManyPatientsConnection {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const UPDATE_PATIENT_MEDICAL_INFORMATION = gql`
mutation UpdatePatientMedicalInformation (
    $id: ID!
    $data: PatientUpdateInput!
  ) {
    updatePatient(where: { id: $id }, data: $data) {
      id
      fullName
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
    publishManyPatientsConnection {
      edges {
        node {
          id
        }
      }
    }
  }
`
export const UPDATE_PATIENT_QUESTIONNAIRE = gql`
mutation UpdateQuestionUser($id: ID!, $data: PatientUpdateInput!) {
  updatePatient(where: {id: $id}, data: $data) {
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
    publishManyPatientsConnection {
      edges {
        node {
          id
        }
      }
    }
  }
`