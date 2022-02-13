import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Pagination = ({ pagination, className }) => {
  const { query } = useRouter()

  const page = pagination?.page
  const pageCount = pagination?.pageCount
  return <div className={`flex justify-center items-center space-x-5 ${className}`}>
    <Link href={{ pathname: "/pisos", query: { ...query, page: parseInt(query?.page) - 1 || 1 } }}><span className={`text-secondary text-lg underline cursor-pointer ${page === 1 ? "hidden" : ""}`}>Anterior</span></Link>
    <span>Página {page} de {pageCount}</span>
    <Link href={{ pathname: "/pisos", query: { ...query, page: parseInt(query?.page) + 1 || 2 } }}><span className={`text-secondary text-lg underline cursor-pointer ${page === pageCount ? "hidden" : ""}`}>Siguiente</span></Link>
  </div>;
};

Pagination.displayName = 'Pagination';

export default Pagination;
