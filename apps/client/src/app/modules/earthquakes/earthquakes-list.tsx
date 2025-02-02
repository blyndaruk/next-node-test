import { format, parseISO } from 'date-fns';

import React, { FC } from 'react';

import {
  EarthquakeEntity,
  FindManyEarthquakesDocument,
  useDeleteEarthquakeMutation,
} from '@/app/graphql/generated';

import styles from './earthquakes.module.scss';

interface Props {
  earthquakes: EarthquakeEntity[];
  onEdit: (quake: EarthquakeEntity) => void;
}

const EarthquakesList: FC<Props> = ({ earthquakes, onEdit }) => {
  const [deleteEarthquake] = useDeleteEarthquakeMutation({
    refetchQueries: [FindManyEarthquakesDocument],
  });

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this earthquake?')) {
      await deleteEarthquake({ variables: { input: { id } } });
    }
  };

  return (
    <ul>
      {earthquakes.map((quake) => (
        <li key={quake.id} className={styles.item}>
          <div className={styles['quake-info']}>
            <div>
              <strong>Date:</strong>
              <span>{format(parseISO(quake.date), 'LLL dd, y HH:mm')}</span>
            </div>
            <div>
              <strong>Location:</strong>
              <span>{quake.location}</span>
            </div>
            <div>
              <strong>Magnitude:</strong>
              <span>{quake.magnitude}</span>
            </div>
          </div>
          <div className={styles.actions}>
            <button className='edit' onClick={() => onEdit(quake)}>
              Edit
            </button>
            <button className='delete' onClick={() => handleDelete(quake.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EarthquakesList;
