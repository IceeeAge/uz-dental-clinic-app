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
        caseHistory: {
          create: {
            beatsMinRr: "N/A"
            bp: "N/A"
            breathsMin: "N/A"
            caseApproved1: "N/A"
            caseApproved2: "N/A"
            caseApproved3: "N/A"
            caseApproved4: "N/A"
            caseApproved5: "N/A"
            cheecks: "N/A"
            cheecksAbnormalSpecify: "N/A"
            cheecksNormal: "N/A"
            chiefComplaints: "N/A"
            clinicalLevel: "N/A"
            clinician: "N/A"
            date1: "N/A"
            date2: "N/A"
            date3: "N/A"
            date4: "N/A"
            date5: "N/A"
            eighteen: "N/A"
            eleven: "N/A"
            examinedBy: "N/A"
            examinedByDate: "N/A"
            fifteen: "N/A"
            floorOfTheMouth: "N/A"
            floorOfTheMouthAbnormalSpecify: "N/A"
            floorOfTheMouthNormal: "N/A"
            fortyFour: "N/A"
            fortyOne: "N/A"
            fortyFive: "N/A"
            fortyEight: "N/A"
            fortySeven: "N/A"
            fortySix: "N/A"
            fortyThree: "N/A"
            fortyTwo: "N/A"
            fourteen: "N/A"
            historyOfPresentIllness: "N/A"
            lip: "N/A"
            lipAbnormalSpecify: "N/A"
            lipNormal: "N/A"
            lymphNodes: "N/A"
            lymphNodesAbnormalSpecify: "N/A"
            lymphNodesNormal: "N/A"
            mallampatiScore: "N/A"
            mmHgPr: "N/A"
            oDCI1: "N/A"
            oDCI2: "N/A"
            oDCI3: "N/A"
            oDCI4: "N/A"
            oDCI5: "N/A"
            otherAbnormalities: "N/A"
            palete: "N/A"
            paleteAbnormalSpecify: "N/A"
            paleteNormal: "N/A"
            seventeen: "N/A"
            sixteen: "N/A"
            temp: "N/A"
            twentyTwo: "N/A"
            twentyThree: "N/A"
            twentySix: "N/A"
            twentySeven: "N/A"
            twentyOne: "N/A"
            twentyFour: "N/A"
            twentyFive: "N/A"
            twentyEight: "N/A"
            twelve: "N/A"
            treatment9: "N/A"
            treatment8: "N/A"
            treatment6: "N/A"
            treatment7: "N/A"
            treatment5: "N/A"
            treatment4: "N/A"
            treatment2: "N/A"
            treatment3: "N/A"
            treatment10: "N/A"
            treatment1: "N/A"
            toothNumber5: "N/A"
            toothNumber4: "N/A"
            toothNumber3: "N/A"
            toothNumber2: "N/A"
            tmjNormal: "N/A"
            tongueAbnormalSpecify: "N/A"
            toothNumber1: "N/A"
            tongueNormal: "N/A"
            tongue: "N/A"
            tenTativeDiagnosis: "N/A"
            thirteen: "N/A"
            thirtyEight: ""
            thirtyFive: ""
            thirtyFour: ""
            thirtyOne: "N/A"
            thirtySeven: "N/A"
            thirtySix: "N/A"
            tmjAbnormalSpecify: "N/A"
            tmj: "N/A"
            thirtyTwo: "N/A"
            thirtyThree: "N/A"
          }
        }
      }
    ) {
      id
    }
    publishManyPatients(to: PUBLISHED) {
      count
    }
    publishManyCaseHistories(to: PUBLISHED) {
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
