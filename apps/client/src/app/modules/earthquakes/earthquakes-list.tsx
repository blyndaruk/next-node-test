import { format } from 'date-fns';

import React, { FC } from 'react';

import { EarthquakeEntity } from '@/app/graphql/generated';

import styles from './earthquakes.module.scss';

interface Props {
  earthquakes: EarthquakeEntity[];
}

const EarthquakesList: FC<Props> = ({ earthquakes }) => {
  return (
    <ul>
      {earthquakes.map((quake) => (
        <li key={quake.id} className={styles.item}>
          <div>
            <strong>Date: </strong>
            <span>{format(quake.date, 'LLL dd, y')}</span>
          </div>
          <div>
            <strong>Location:</strong>
            <span>{quake.location}</span>
          </div>
          <div>
            <strong>Magnitude:</strong>
            <span>{quake.magnitude}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EarthquakesList;
