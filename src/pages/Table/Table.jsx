import React from 'react';

import TableCheckbox from '../../components/ui/Table/TableCheckbox';
import TableDefault from '../../components/ui/Table/TableDefault';
import TablePagination from '../../components/ui/Table/TablePagination';

const Table = () => {
  return (
    <div className="space-y-12">
      <TableDefault />
      <TablePagination />
      <TableCheckbox />
    </div>
  );
};

export default Table;
