import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [{ id: '1' }];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
