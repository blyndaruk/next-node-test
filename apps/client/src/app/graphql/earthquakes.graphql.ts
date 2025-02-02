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

  mutation CreateEarthquake($input: CreateEarthquakeInput!) {
    createEarthquake(input: $input) {
      message
    }
  }

  mutation UpdateEarthquake($input: UpdateEarthquakeInput!) {
    updateEarthquake(input: $input) {
      message
    }
  }

  mutation DeleteEarthquake($input: DeleteEarthquakeInput!) {
    deleteEarthquake(input: $input) {
      message
    }
  }
`;
