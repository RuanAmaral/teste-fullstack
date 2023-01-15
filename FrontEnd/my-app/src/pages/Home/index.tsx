import { useState, useMemo } from 'react';

import mewtwo from '../../assets/mewtwo.png';
import { Card } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import data from '../../mocks/test.json';
import { Container } from './styles';

function Home() {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <Container>
      {currentTableData.map((item) => {
        return (
          <Card
            key={item?.id}
            image={mewtwo}
            number={item?.id}
            name={item?.first_name}
            weight={item?.phone}
            height={item?.phone}
            type={item?.last_name}
          />
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </Container>
  );
}

export { Home };
