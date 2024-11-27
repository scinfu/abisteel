import React, { useEffect } from 'react';

const BackgroundVideo = () => {
  useEffect(() => {
    // Carica dinamicamente la YouTube Iframe API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Funzione chiamata dall'API di YouTube
    window.onYouTubeIframeAPIReady = () => {
      const player = new YT.Player('youtube-player', {
        videoId: '3SfvmY-o-P4', // ID del video
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: '3SfvmY-o-P4',
          rel: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event) => {
            // Imposta la qualità desiderata
            event.target.setPlaybackQuality('hd1080'); // hd1080, hd720, large, medium, small
          },
        },
      });
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '50vh',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      <div
        id="youtube-player"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '56.25vw',
          minHeight: '100%',
          minWidth: '100%',
          pointerEvents: 'none',
        }}
      ></div>
    </div>
  );
};

export default BackgroundVideo;
