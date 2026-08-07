import { Project, ProjectStatus } from "./types";

type BackendProjectStatus = "DEVAM_EDIYOR" | "TAMAMLANDI" | "YAKINDA";

type BackendProjectImage = {
    id: string;
    url: string;
    publicId: string;
    order: number;
};

type BackendProject = {
    id: string;
    name: string;
    description: string;
    status: BackendProjectStatus;
    deliveryYear: number | null;
    unitCount: number | null;
    city: string;
    district: string;
    features: string[];
    images: BackendProjectImage[];
    createdAt: string;
    updatedAt: string;
};

const STATUS_LABELS: Record<BackendProjectStatus, ProjectStatus> = {
    DEVAM_EDIYOR: "Devam Ediyor",
    TAMAMLANDI: "Tamamlandı",
    YAKINDA: "Yakında",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function toProject(p: BackendProject): Project {
    const sortedImages = [...p.images].sort((a, b) => a.order - b.order);

    return {
        slug: p.id,
        title: p.name,
        location: `${p.district}, ${p.city}`,
        status: STATUS_LABELS[p.status],
        year: p.deliveryYear ? String(p.deliveryYear) : "Belirtilmedi",
        unitCount: p.unitCount ? `${p.unitCount} Daire` : "Belirtilmedi",
        summary:
            p.description.length > 140
                ? `${p.description.slice(0, 140)}…`
                : p.description,
        description: p.description,
        features: p.features,
        // Gerçek görsel yoksa BuildingArt'ın üretken placeholder'ı devreye girsin
        // diye proje id'sini seed olarak kullanıyoruz.
        images: sortedImages.length > 0 ? sortedImages.map((img) => img.url) : [p.id],
    };
}

export async function fetchProjects(): Promise<Project[]> {
    if (!API_URL) {
        console.error("NEXT_PUBLIC_API_URL tanımlı değil.");
        return [];
    }

    try {
        const res = await fetch(`${API_URL}/projects`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) throw new Error(`Projeler alınamadı: ${res.status}`);
        const data: BackendProject[] = await res.json();
        return data.map(toProject);
    } catch (error) {
        console.error("fetchProjects hata:", error);
        return [];
    }
}

export async function fetchProjectById(id: string): Promise<Project | null> {
    if (!API_URL) {
        console.error("NEXT_PUBLIC_API_URL tanımlı değil.");
        return null;
    }

    try {
        const res = await fetch(`${API_URL}/projects/${id}`, {
            next: { revalidate: 60 },
        });
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`Proje alınamadı: ${res.status}`);
        const data: BackendProject = await res.json();
        return toProject(data);
    } catch (error) {
        console.error("fetchProjectById hata:", error);
        return null;
    }
}