import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

const icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          paddingLeft: '4px',
          paddingBottom: '3px',
          backgroundColor: '#1c1f22',
          borderRadius: '5px',
          fontSize: 18,
          color: '#ffffff',
        }}
      >
        EQ
      </div>
    ),
    size,
  );
};

export default icon;
