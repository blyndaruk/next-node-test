import { gql } from '@apollo/client';

gql`
  query FindManyEarthquakes($input: FindEarthquakesInput!) {
    findManyEarthquakes(input: $input) {
      data {
        id
        date
        location
        magnitude
      }
      pagination {
        total
        order
        page
        pages
        sort
        take
      }
    }
  }
`;
