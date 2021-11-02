export interface Page<t> {
    content: Array<t>;
    size: number;
    number: number;
    totalEmements: number;
    first: number;
}