export interface APIData {
    answer: string;
    documents?: string[];
    coordinates?: Array<{
        [pageNumber: string]: {
            top_left: [number, number];
            bottom_right: [number, number];
        };
    }>;
}