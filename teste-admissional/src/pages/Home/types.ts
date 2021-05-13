
export interface ITablePaginationProps {
    currentPage: number,
    countPages: number,
    Previous: () => void,
    Next: () => void,
}