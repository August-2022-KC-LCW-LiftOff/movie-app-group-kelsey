
export type Trigger = {
    title: string,
    id: number;
    categoryDescription: string, 
    subcategories?: string[];
    resourcePhone?: string[];
}


export type Movie = { 
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poplularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type ApiResponse = { 
    page: number,
    results: Movie[],
    total_results: number,
    total_pages: number
}

export type TriggerWarning = {
    headline: string;
    movieTitle: string;
    movieId: string;
    warning: string; 
    category: string;
    subcategory?: string;
    userId?: string;
}