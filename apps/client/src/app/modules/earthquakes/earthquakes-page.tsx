'use client';

import React, { FC, useRef, useState } from 'react';

import { EarthquakeEntity, useFindManyEarthquakesQuery } from '@/app/graphql/generated';
import { LoadingComponent } from '@/app/modules';
import Pagination from '@/app/modules/earthquakes/_components/pagination';
import EarthquakeForm from '@/app/modules/earthquakes/earthquake-form';
import EarthquakesList from '@/app/modules/earthquakes/earthquakes-list';

const EarthquakesPage: FC = () => {
  const [page, setPage] = useState(1);
  const formRef = useRef<HTMLDivElement>(null);
  const [editingQuake, setEditingQuake] = useState<EarthquakeEntity | null>(null);

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

  const handleEdit = (quake: EarthquakeEntity) => {
    setEditingQuake(quake);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div style={{ padding: '2em' }}>
      <h2 style={{ fontSize: 32, marginBottom: 30 }}>Earthquakes</h2>
      <div ref={formRef}>
        <EarthquakeForm selectedEarthquake={editingQuake} onClose={() => setEditingQuake(null)} />
      </div>

      <div style={{ marginTop: 40 }}>
        <EarthquakesList earthquakes={earthquakes} onEdit={handleEdit} />
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        pages={data?.findManyEarthquakes.pagination.pages}
      />
    </div>
  );
};

export default EarthquakesPage;
