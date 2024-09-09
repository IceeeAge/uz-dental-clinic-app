//update,delete,create data
import { gql } from "@apollo/client";

export const CREATE_PATIENT_MUTATION = gql`
  mutation CreatePatient(
    $profileImage: String!
    $email: String!
    $fullName: String!
    $contactNumber: String!
    $sex: String!
    $statusAppointmentS: String!
    $dateOfBirth: String!
    $address: String
    $height: String
    $occupation: String
    $weight: String
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
        statusAppointmentS: PENDING
      }
    ) {
      id
    }
    publishManyPatients(to: PUBLISHED) {
      count
    }
  }
`;
