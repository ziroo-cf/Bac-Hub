// data.ts

export interface Resource {
  title: string;
  url: string;
  type: 'video' | 'doc'; 
}

export interface Subject {
  id: number;
  subjectName: string;
  icon: string;
  resources: Resource[];
}

export const bacData: Subject[] = [
  {
    id: 1,
    subjectName: "Math",
    icon: "📐",
    resources: [
      {
        title: "mouad tahiri (Youtube)",
        url: "https://www.youtube.com/playlist?list=PL77wkILq8dq4kzm1cWSCBkwEDuO8EeGki",
        type: "video"
      },
      {
        title: "maths variés (Youtube)",
        url: "https://www.youtube.com/@mathsvaries879/playlists",
        type: "video"
      },
      {
        title: "Nourischool (Youtube)",
        url: "https://www.youtube.com/@yassinenouri/videos",
        type: "video"
      },
      {
        title: "Cours, Résumés et Exercices (AlloSchool)",
        url: "https://www.alloschool.com/course/mathematiques-2eme-bac-sciences-physiques-biof",
        type: "doc"
      },
      {
        title: "Examens nationaux avec corrigés (AlloSchool)",
        url: "https://www.alloschool.com/section/5321",
        type: "doc"
      },
      {
        title: " Cadre de référence de l'examen national",
        url: "https://www.alloschool.com/section/4687",
        type: "doc"
      },
    ]
  },
  {
    id: 2,
    subjectName: "PC",
    icon: "🧪",
    resources: [
      {
        title: "top physique chimie (Youtube)",
        url: "https://www.youtube.com/playlist?list=PLZAeMV7lm1EO31VswGYQssZkuFSRgzHMI",
        type: "video"
      },
      {
        title: "Noureddine Physique (Youtube)",
        url: "https://www.youtube.com/@NoureddinePhysique/playlists",
        type: "video"
      },
      {
        title: "Cours, Résumés et Exercices (AlloSchool)",
        url: "https://www.alloschool.com/course/physique-et-chimie-2eme-bac-sciences-physiques-biof",
        type: "doc"
      },
      {
        title: "Examens nationaux avec corrigés (AlloSchool)",
        url: "https://www.alloschool.com/section/4586",
        type: "doc"
      },
      {
        title: " Cadre de référence de l'examen national",
        url: "https://www.alloschool.com/section/4397",
        type: "doc"
      },
    ]
  },
  {
    id: 3,
    subjectName: "SVT",
    icon: "🧬",
    resources: [
      {
        title: "Pr AYYOUB LAMSAF (Youtube)",
        url: "https://www.youtube.com/@SvtAYYOUBLAMSAF/playlists",
        type: "video"
      },
      {
        title: "Prof Faress (Youtube)",
        url: "https://www.youtube.com/@proffaress9859/playlists",
        type: "video"
      },
      {
        title: "3ISSI TV (Youtube)",
        url: "https://www.youtube.com/playlist?list=PLf3e10tOUhNbyLFhk7yGiJwjBpSxo5niC",
        type: "video"
      },
      {
        title: "Cours, Résumés et Exercices (AlloSchool)",
        url: "https://www.alloschool.com/course/sciences-de-la-vie-et-de-la-terre-svt-2eme-bac-sciences-physiques-biof",
        type: "doc"
      },
      {
        title: "Examens nationaux avec corrigés (AlloSchool)",
        url: "https://www.alloschool.com/section/5192",
        type: "doc"
      },
      {
        title: " Cadre de référence de l'examen national",
        url: "https://www.alloschool.com/section/4008",
        type: "doc"
      },
    ]
  },
  {
    id: 4,
    subjectName: "Philosophie",
    icon: "🧠",
    resources: [
      {
        title: "خطة مراجعة شاملة للفلسفة فأقل من 20 يوم (Youtube)",
        url: "https://www.youtube.com/watch?v=zskaKJGLghs",
        type: "video"
      },
      {
        title: "el masrioui mohamed (Youtube)",
        url: "https://www.youtube.com/playlist?list=PLB4-mFkeZBjefI63-bBmbyIerY8yNddmZ",
        type: "video"
      },
      {
        title: "Sohaib Lmouleh صهيب لمولح (Youtube)",
        url: "https://www.youtube.com/playlist?list=PLY917b_Zh4rft9Ti_Kki7efTfNqdBMiBi",
        type: "video"
      },
      {
        title: "ملخصات (AlloSchool)",
        url: "https://www.alloschool.com/section/1087",
        type: "doc"
      },
      {
        title: "منهجيات (AlloSchool)",
        url: "https://www.alloschool.com/section/1084",
        type: "doc"
      },
      {
        title: "دروس وملخصات (AlloSchool)",
        url: "https://www.alloschool.com/course/alflsfa-althania-bak-alom-fiziaiia",
        type: "doc"
      },
      {
        title: "موحدات مع التصحيح (AlloSchool)",
        url: "https://www.alloschool.com/section/1089",
        type: "doc"
      },
      {
        title: "  الإطار المرجعي للامتحان الوطني الموحد",
        url: "https://www.alloschool.com/section/2195",
        type: "doc"
      },
    ]
  },
  {
    id: 5,
    subjectName: "Anglais",
    icon: "🇬🇧",
    resources: [
      {
        title: "قناة التفوق بامتياز (Youtube)",
        url: "https://www.youtube.com/playlist?list=PLjt4BR1uXssYmEdWvNfYkLI58TBk41hNX",
        type: "video"
      },
      {
        title: "Sara English (Youtube)",
        url: "https://www.youtube.com/playlist?list=PL9Ke2-VummL-ceJCS9txOKsdLUrnbqhTc",
        type: "video"
      },
      {
        title: "Cours, Résumés et Exercices (AlloSchool)",
        url: "https://www.alloschool.com/course/anglais-2eme-bac-sciences-physiques",
        type: "doc"
      },
      {
        title: "Examens nationaux avec corrigés (AlloSchool)",
        url: "https://www.alloschool.com/section/2229",
        type: "doc"
      },
      {
        title: " Cadre de référence de l'examen national",
        url: "https://www.alloschool.com/section/2123",
        type: "doc"
      },
    ]
  },
];