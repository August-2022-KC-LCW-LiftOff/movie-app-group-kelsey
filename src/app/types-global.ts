// import internal from "assert";
// import { IncomingHttpHeaders } from "http2";

export type Trigger = {
    title: string,
    id: number;
    categoryDescription: string, 
    subcategories?: string[];
    resourcePhone?: string[];
}

