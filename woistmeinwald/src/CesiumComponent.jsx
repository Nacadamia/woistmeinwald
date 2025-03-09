import React, { useEffect } from 'react';
import { Viewer } from 'cesium';

const CesiumComponent = () => {
  useEffect(() => {
    const viewer = new Viewer('cesiumContainer');
    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, []);

  return <div id="cesiumContainer" style={{ width: '100%', height: '100%' }}></div>;
};

export default CesiumComponent;