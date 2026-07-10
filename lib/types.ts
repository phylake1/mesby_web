export type ProjectStatus = "Devam Ediyor" | "Tamamlandı" | "Yakında";

export type Project = {
  slug: string;
  title: string;
  location: string;
  status: ProjectStatus;
  year: string;
  unitCount: string;
  summary: string;
  description: string;
  features: string[];
  art: number;
};

export type Listing = {
  id: string;
  title: string;
  price: number;
  currency: "TL";
  m2: number;
  rooms: string;
  floor: string;
  buildingAge: string;
  district: string;
  city: string;
  isNew: boolean;
  publishedAt: string;
  art: number;
};
