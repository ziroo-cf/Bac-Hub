import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bac-Hub | مصادر الباكالوريا',
    short_name: 'Bac-Hub',
    description: 'أحسن المصادر لي محتاج فبلاصة وحدة',
    start_url: '/',
    display: 'standalone',
    "background_color": "#181a1b", 
    "theme_color": "#204a87",
    icons: [
      {
        "src": "/icon-192.png", 
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icon-512.png",
        "sizes": "512x512",
        "type": "image/png"
      },
    ],
    screenshots: [
  {
    "src": "/screenshot-mobile.png",
    "sizes": "1080x1920",
    "type": "image/png",
    "form_factor": "narrow",
    "label": "Bac-Hub Mobile View"
  },
  {
    "src": "/screenshot-desktop.png",
    "sizes": "1920x1080",
    "type": "image/png",
    "form_factor": "wide",
    "label": "Bac-Hub Desktop View"
  }
]
  }
}