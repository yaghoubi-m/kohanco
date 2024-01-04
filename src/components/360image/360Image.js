// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './360Image.module.css';
// import { EquirectangularAdapter } from '@photo-sphere-viewer/core';
// import { CubemapAdapter } from 'react-photo-sphere-viewer';

import {
  ReactPhotoSphereViewer,
  AutorotatePlugin,
  EquirectangularTilesAdapter,
  EquirectangularTilesAdapterConfig,
} from 'react-photo-sphere-viewer';
// import image from '../../assets/images/360.jpg';
const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
// const ReactPhotoSphereViewer = dynamic(
//   () => import('react-photo-sphere-viewer').then((mod) => mod.ReactPhotoSphereViewer),
//   {
//     // animate: '200rpm',
//     ssr: false,
//   },
// );
const Image360Deg = ({img}) => {
  const photoSphereRef = React.createRef(<ReactPhotoSphereViewer />);
  // console.log('sss');
  useEffect(() => {
    if (!photoSphereRef.current) return;
    photoSphereRef.current.animate({
      yaw: 0,
      pitch: 0,
      zoom: 0,
      speed: '10rpm',
    });
  }, [photoSphereRef]);

  return (
    <div className={styles.con}>
      <ReactPhotoSphereViewer
        ref={photoSphereRef}
        // animate={{speed:'200rpm'}}
        src={img[0]}
        height={'100%'}
        width={'100%'}
        loadingImg={baseUrl + 'loader.gif'}
        defaultZoomLvl={1}
        mousewheel={false}
        // moveSpeed={2000}

        // autorotateSpeed={2000}
        plugins={[AutorotatePlugin]}
      ></ReactPhotoSphereViewer>
    </div>
  );
};

export default Image360Deg;
