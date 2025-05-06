import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: '678cdd8a4f09934240aa1e92' },
        { id: '678cdecf4f09934240aa1ebb' },
        { id: '678f71014f09934240aa1f69' },
        { id: '6794dc0d4f09934240aa1fd9' },
        { id: '6798bcd44f09934240aa2047' },
        { id: '679b53d04f09934240aa20b5' },
        { id: '679e2b914f09934240aa2276' },
        { id: '679e35584f09934240aa22e5' },
        { id: '67a74750e6f9c6fe81f1844f' },
        { id: '67addd81e6f9c6fe81f1869c' },
        { id: '67ade15fe6f9c6fe81f1871e' },
        { id: '67adf878e6f9c6fe81f18798' },
        { id: '67bc6dc1e6f9c6fe81f18b85' },
        { id: '67cec3b0e6f9c6fe81f18de4' },
        { id: '67de97c2cc19a8d403d602bc' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
