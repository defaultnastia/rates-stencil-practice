import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'ui-library',
  outputTargets: [
    reactOutputTarget({
      outDir: '../../apps/react-app/src/components/stencil-generated',
    }),
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
