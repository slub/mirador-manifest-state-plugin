import mirador from 'mirador/dist/es/src/index';
import manifestStatePlugins from '../../src';

const config = {
  id: 'demo',
  windows: [{
      loadedManifest: 'https://example.com/manifests/object/299843',
  }]
};

mirador.viewer(config, [...manifestStatePlugins]);
