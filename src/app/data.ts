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
        title: "سلسلة دروس الدوال",
        url: "https://youtube.com/...",
        type: "video"
      }
    ]
  },
  {
    id: 2,
    subjectName: "PC",
    icon: "🧪",
    resources: [
      {
        title: "ملخص الميكانيك",
        url: "https://drive.google.com/...",
        type: "doc"
      }
    ]
  }
];