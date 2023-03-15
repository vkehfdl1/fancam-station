'use client';
import YouTube from 'react-youtube';


export default function Play() {
    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />;
}
