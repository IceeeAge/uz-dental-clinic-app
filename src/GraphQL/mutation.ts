//update,delete,create data
import { gql } from "@apollo/client";

export const CREATE_PATIENT_MUTATION = gql`
 mutation CreatePatient(
  $profileImage: String!, 
  $email: String!, 
  $fullName: String!, 
  $contactNumber: String!, 
  $sex: String!, 
  $dateOfBirth: String!, 
  $address: String, 
  $height: String, 
  $occupation: String, 
  $weight: String,
  $statusAppointment: String!
) {
  createPatient(
    data: {
      profileImage: { create: { uploadUrl: $profileImage } },
      email: $email,
      fullName: $fullName,
      contactNumber: $contactNumber,
      sex: $sex,
      dateOfBirth: $dateOfBirth,
      address: $address,
      height: $height,
      occupation: $occupation,
      weight: $weight,
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
  updatePatient(where: {id: $id}, data: $data) {
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

