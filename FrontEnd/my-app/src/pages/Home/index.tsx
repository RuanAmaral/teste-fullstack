// @ts-nocheck
import cuid from 'cuid';
import { useState, useMemo, useEffect, useContext } from 'react';
import ReactLoading from 'react-loading';
import { ThemeContext } from 'styled-components';

import { Card } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { searchAllPokemons } from '../../services/api';
import { Container, LoadingContainer } from './styles';

function Home() {
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const { palette } = useContext(ThemeContext);

  useEffect(() => {
    try {
      searchAllPokemons().then(() => {
        const list = JSON.parse(localStorage.getItem('pokemons'));
        setData(list);
        setLoading(false);
      });
    } catch {
      setData([]);
    }
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return loading ? (
    <LoadingContainer>
      <ReactLoading type="spin" color={palette.GENERAL.TERTIARY} />
    </LoadingContainer>
  ) : (
    <Container>
      {currentTableData?.map((item: any) => {
        return (
          <Card
            key={cuid()}
            image={item?.image}
            number={item?.number}
            name={item?.name}
            weight={item?.weight}
            height={item?.height}
            type={item?.type}
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
