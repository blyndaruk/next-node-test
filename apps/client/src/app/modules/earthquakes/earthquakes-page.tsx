'use client';

import React, { FC, useState } from 'react';

import { EarthquakeEntity, useFindManyEarthquakesQuery } from '@/app/graphql/generated';
import { LoadingComponent } from '@/app/modules';
import EarthquakesList from '@/app/modules/earthquakes/earthquakes-list';

const EarthquakesPage: FC = () => {
  const [page, setPage] = useState(1);

  const { loading, error, data } = useFindManyEarthquakesQuery({
    variables: {
      input: {
        pagination: { page, take: 10, sort: 'date', order: 'desc' },
      },
    },
  });

  if (loading) return <LoadingComponent />;

  if (error) return <p>Error fetching earthquakes: {error?.message}</p>;

  const earthquakes: EarthquakeEntity[] = data?.findManyEarthquakes.data || [];

  return (
    <div style={{ padding: '2em' }}>
      <h2 style={{ fontSize: 32, marginBottom: 30 }}>Earthquakes</h2>
      <EarthquakesList earthquakes={earthquakes} />

      <div style={{ marginTop: 40 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span> Page {page} </span>
        <button
          disabled={page >= (data?.findManyEarthquakes.pagination.pages || 1)}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EarthquakesPage;
