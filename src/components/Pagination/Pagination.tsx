import { PaginationContainer, PaginationCounter, PaginationItem } from './styles';
import { type IPaginationProps } from './types';

export const Pagination = ({
  pageNumber,
  onNextPageChangeHandle,
  onPrevPageChangeHandle
}: IPaginationProps): JSX.Element => {
  return (
    <PaginationContainer>
      <PaginationItem onClick={onPrevPageChangeHandle} disabled={pageNumber === 0}>
        Back
      </PaginationItem>
      <PaginationCounter>{pageNumber}</PaginationCounter>
      <PaginationItem onClick={onNextPageChangeHandle}>Next</PaginationItem>
    </PaginationContainer>
  );
};
