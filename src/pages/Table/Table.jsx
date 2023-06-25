import axios from 'axios';
import React, { useEffect, useState } from 'react';

import TableCheckbox from '../../components/ui/Table/TableCheckbox';
import TableDefault from '../../components/ui/Table/TableDefault';
import TablePagination from '../../components/ui/Table/TablePagination';

const Table = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
      .get('/product.json')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!products) {
    return <>Loading</>;
  }
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-xl pb-6 dark:text-gray-300">Default Table</h2>
        <TableDefault products={products} setProducts={setProducts} />
      </div>
      <div>
        <h2 className="text-xl pb-6 dark:text-gray-300">
          Table with pagination
        </h2>
        <TablePagination products={products} setProducts={setProducts} />
      </div>
      <div>
        <h2 className="text-xl pb-6 dark:text-gray-300">Table with checkbox</h2>
        <TableCheckbox products={products} setProducts={setProducts} />
      </div>
    </div>
  );
};

export default Table;
