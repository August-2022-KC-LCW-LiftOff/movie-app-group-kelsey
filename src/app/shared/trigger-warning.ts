export interface TriggerWarning {
    $key: string;
    headline: string,
    movieTitle: string;
    warning: string, 
    category: string;
    subcategory?: string;
    userId?: string;
}