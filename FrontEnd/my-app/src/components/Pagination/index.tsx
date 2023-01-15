// @ts-nocheck
import { usePagination, DOTS } from '../../utils/usePagination';
import { Container } from './styles';

interface IProps {
  pageSize: number;
  onPageChange?: any;
  siblingCount?: number;
  currentPage: number;
  totalCount: number;
}

function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: IProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <Container>
      <li
        className="pagination-item"
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange!.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={2} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={2}
            className="pagination-item"
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className="pagination-item"
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </Container>
  );
}

export { Pagination };
