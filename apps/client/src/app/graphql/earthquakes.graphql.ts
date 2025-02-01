import { gql } from '@apollo/client';

gql`
  query FindManyEarthquakes {
    findManyEarthquakes {
      id
    }
  }
`;
