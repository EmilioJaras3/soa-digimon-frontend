export interface Digimon {
    name: string;
    img: string;
    level: string;
}

export interface DigiApiResponse {
    digimons?: Digimon[];
    digimon?: Digimon;
    timestamp: string;
    error?: string;
}
