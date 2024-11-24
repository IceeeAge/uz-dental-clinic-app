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
        bleedingGums: "N/A"
        sensitive: "N/A"
        foodTrap: "N/A"
        dryMouth: "N/A"
        pastGap: "N/A"
        pastOrthodonic: "N/A"
        problem: "N/A"
        earaches: "N/A"
        clicking: "N/A"
        bruxing: "N/A"
        sores: "N/A"
        dentures: "N/A"
        active: "N/A"
        serious: "N/A"
        dateOfLastExam: "N/A"
        careOfAPhysicians: "N/A"
        physiciansName: "N/A"
        phonePhysician: "N/A"
        areYouInGoodHealth: "N/A"
        anyChangesInYourHealth: "N/A"
        hospitalization: "N/A"
        prescriptionOrCounterMedications: "N/A"
        allergies: "N/A"
        specify: "N/A"
        alcoholIntake: "N/A"
        amoutAndFrequency: "N/A"
        forWomen: "N/A"
        lactating: "N/A"
        ifYesWhatWasTheIllnessOrProblem: "N/A"
        dateOfLastPhysicalExam: "N/A"
        vitaminsNaturalOrHerbalSupplements: "N/A"
        highBloodPressure: "NO"
        heartAttack: "NO" 
        heartDiseaseSpecify: "N/A"
        lowBloodPressure: "NO"
        leukemia: "NO"
        anemia: "NO"
        kidneyDisease: "NO"
        kidneyDiseaseSpecify: "N/A"
        asthma: "NO"
        lungDisease: "NO"
        lungDiseaseSpecify: "N/A"
        stroke: "NO"
        neurologicalDisorder: "NO"
        neurologicalDisorderSpecify: "N/A"
        epilepsyConvulsions: "NO"
        brainInjury: "NO"
        psychiatricTreatment: "NO"
        diabetes: "NO"
        aidsHivInfection: "NO"
        congenitalDisease: "NO"
        congenitalDiseaseSpecify: "N/A"
        hepatitis: "NO"
        liverDisorder: "NO"
        livErDisorderSpecify: "N/A"
        jointDisorder: "NO"
        jointReplacementOrImplants: "NO"
        steroidTherapy: "NO"
        stomachTroublesUlcers: "NO"
        chestPains: "NO"
        frequentSoreThroat: "NO"
        persistentCough: "NO"
        difficultInBreathing: "NO"
        cancerOrTumor: "NO"
        radiationOrChemotherapy: "NO"
        recentWEightLoss: "NO"
        others: "NO"
        othersSpecify: "N/A"
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
  mutation UpdatePatientMedicalInformation(
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
`;
export const UPDATE_PATIENT_QUESTIONNAIRE = gql`
  mutation UpdateQuestionUser($id: ID!, $data: PatientUpdateInput!) {
    updatePatient(where: { id: $id }, data: $data) {
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
`;

export const REQUEST_EFORM = gql`
  mutation RequestUserEformPdfFile(
    $email: String!
    $fullName: String!
    $requestUserEformPdf: String!
  ) {
    createRequestUserEformPdf(
      data: {
        email: $email
        fullName: $fullName
        requestUserEformPdf: $requestUserEformPdf
      }
    ) {
      id
    }
    publishManyRequestUserEformPdfsConnection {
      edges {
        node {
          id
        }
      }
    }
  }
`;
