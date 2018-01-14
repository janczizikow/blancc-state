import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

const divider = {
  height: 226,
};

const IndexPage = (props) => {
  return (
    <div>
      <div
        css={{
          position: 'relative',
          maxWidth: 1600,
          margin: '0 auto',
          height: '100%',
          minHeight: 'calc(100vh - 60px)',
          background: `#252b33 url('./bg_lg.jpg') no-repeat 50%`,
          backgroundSize: 'cover',
          '::before': {
            position: 'absolute',
            display: 'block',
            content: `''`,
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#252b33',
            opacity: 0.65,
            zIndex: 1,
          },
          '@media (min-width: 768px)': {
            background: `#252b33 url('./bg_md.jpg') no-repeat 50%`,
            backgroundSize: 'cover',
          },
        }}>

        <div
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            maxWidth: '32em',
            zIndex: 1,
          }}>
          <h1
            css={{
              fontSize: '2rem',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: 10,
            }}>
            Coming Soon
          </h1>
          <p
            css={{
              fontSize: '1.25rem',
            }}
          >
            Hold tight friends and fiends, audio dope is on the way. The fix is
            gonna be surreal. Stay up!
          </p>
        </div>
        <div
          css={{
            position: 'absolute',
            left: 0,
            bottom: -285 + 58,
            width: '100%',
            minHeight: 80,
            zIndex: 2,
          }}
        >
          <div css={{
            maxWidth: 1200,
            padding: 0,
            margin: '0 auto',
            '@media (min-width: 768px)': {
              padding: '0 1.25rem',
            },
          }}>
            <SpotifyPlayer
              uri="spotify:user:nd8y8w8o6a3k5c9trubiefvcy:playlist:6vkYiR316Gx26lEQB5ysWG"
              size={{
                width: '100%',
                height: 285,
              }}
              view="list"
              theme="black"
            />
          </div>
        </div>
      </div>
      <div style={divider} />
    </div>
  );
};

export default IndexPage;