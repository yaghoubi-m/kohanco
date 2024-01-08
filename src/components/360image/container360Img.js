'use client'

import React, {useEffect, useRef} from 'react';
import dynamic from 'next/dynamic';
import styles from './360Image.module.css';

import {
    AutorotatePlugin,
    EquirectangularTilesAdapter,
    EquirectangularTilesAdapterConfig
} from 'react-photo-sphere-viewer';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const Container360Img = ({img}) => {
    if  (typeof window === 'undefined'){
        return null
    }
    const ReactPhotoSphereViewer = dynamic(
        () => import('react-photo-sphere-viewer').then((mod) => {
            return mod.ReactPhotoSphereViewer
        }),
        {
            // animate: '200rpm',
            ssr: false,
        },
    );
    useEffect(()=>{},[])
    // const photoSphereRef = React.createRef(<ReactPhotoSphereViewer />);
    // console.log('sss');
    // useEffect(() => {
    //   if (!photoSphereRef.current) return;
    //   photoSphereRef.current.animate({
    //     yaw: 0,
    //     pitch: 0,
    //     zoom: 0,
    //     speed: '10rpm',
    //   });
    // }, [photoSphereRef]);

    return (
        <div className={styles.con}>
            {/*<ReactPhotoSphereViewer*/}
            {/*  ref={photoSphereRef}*/}
            {/*  // animate={{speed:'200rpm'}}*/}
            {/*  src={img[0]}*/}
            {/*  height={'100%'}*/}
            {/*  width={'100%'}*/}
            {/*  loadingImg={baseUrl + 'loader.gif'}*/}
            {/*  defaultZoomLvl={1}*/}
            {/*  mousewheel={false}*/}
            {/*  // moveSpeed={2000}*/}

            {/*  // autorotateSpeed={2000}*/}
            {/*  plugins={[AutorotatePlugin]}*/}
            {/*></ReactPhotoSphereViewer>*/}
            {ReactPhotoSphereViewer &&( <ReactPhotoSphereViewer
                // adapter={[EquirectangularTilesAdapter, EquirectangularTilesAdapterConfig]}
                plugins={[AutorotatePlugin]}
                src={img[0]}
                height="100%"
                width="100%"
                loadingImg={baseUrl + 'loader.gif'}
                defaultZoomLvl={1}
                mousewheel={false}
                autorotateIdle={false}
                keyboard={false}
                mousewheelCtrlKey={true}
                container='div'
                touchmoveTwoFingers={true}
                useXmpData={false}
                containerClass={styles.con}
                littlePlanet={false}
            />)}
        </div>
    );
};

export default Container360Img;
