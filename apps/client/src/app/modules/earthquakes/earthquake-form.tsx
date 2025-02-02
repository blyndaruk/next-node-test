import { format, parseISO } from 'date-fns';

import React, { useEffect, useState } from 'react';

import {
  EarthquakeEntity,
  FindManyEarthquakesDocument,
  useCreateEarthquakeMutation,
  useUpdateEarthquakeMutation,
} from '@/app/graphql/generated';
import { customToast } from '@/packages/react-toast';

import styles from './earthquakes.module.scss';

interface Props {
  selectedEarthquake: EarthquakeEntity | null;
  onClose: () => void;
}

const EarthquakeForm: React.FC<Props> = ({ selectedEarthquake, onClose }) => {
  const [location, setLocation] = useState('');
  const [magnitude, setMagnitude] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [createEarthquake] = useCreateEarthquakeMutation({
    refetchQueries: [FindManyEarthquakesDocument],
  });

  const [updateEarthquake] = useUpdateEarthquakeMutation({
    refetchQueries: [FindManyEarthquakesDocument],
  });

  useEffect(() => {
    if (selectedEarthquake) {
      setLocation(selectedEarthquake.location);
      setMagnitude(selectedEarthquake.magnitude.toString());

      const parsedDate = parseISO(selectedEarthquake.date);
      setDate(format(parsedDate, 'yyyy-MM-dd'));
      setTime(format(parsedDate, 'HH:mm'));
    }
  }, [selectedEarthquake]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!location || !magnitude || !date || !time) {
      return customToast('All fields are required!', 'error');
    }

    const fullDate = new Date(`${date}T${time}:00Z`).toISOString(); // Combines date and time

    const variables = { input: { location, magnitude: parseFloat(magnitude), date: fullDate } };

    if (selectedEarthquake) {
      await updateEarthquake({
        variables: { input: { ...variables.input, id: selectedEarthquake.id } },
      });
      customToast('Earthquake updated successfully!', 'success');
    } else {
      await createEarthquake({ variables });
      customToast('New earthquake created successfully!', 'success');
    }

    onClose();
  };

  return (
    <div className={styles.formContainer}>
      <h3>{selectedEarthquake ? 'Edit Earthquake' : 'New Earthquake'}</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Location</label>
          <input
            type='text'
            placeholder='Enter location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Magnitude</label>
          <input
            type='number'
            placeholder='Enter magnitude'
            value={magnitude}
            onChange={(e) => setMagnitude(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Date</label>
          <input type='date' value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label>Time</label>
          <input type='time' value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>

        <div className={styles.buttonGroup}>
          <button type='submit' className='submit'>
            {selectedEarthquake ? 'Update' : 'Create'}
          </button>
          <button type='button' className='cancel' onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EarthquakeForm;
