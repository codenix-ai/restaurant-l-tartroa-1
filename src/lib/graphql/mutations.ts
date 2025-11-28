import { gql } from '@apollo/client';

export const CREATE_RESERVATION = gql`
  mutation CreateReservation(
    $name: String!
    $email: String!
    $phone: String!
    $date: String!
    $time: String!
    $partySize: Int!
    $specialRequests: String
  ) {
    createReservation(
      input: {
        name: $name
        email: $email
        phone: $phone
        date: $date
        time: $time
        partySize: $partySize
        specialRequests: $specialRequests
      }
    ) {
      id
      name
      email
      phone
      date
      time
      partySize
      specialRequests
      status
      createdAt
    }
  }
`;
