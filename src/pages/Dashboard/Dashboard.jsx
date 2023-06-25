import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AnnouncementOne from '../../components/ui/Elements/Announcement/AnnouncementOne';
import CircularAvatars from '../../components/ui/Elements/Avatar/CircularAvatars';
import NavLeft from '../../components/ui/Navigation/AllNavbar/NavLeft';
import PricingCard from '../../components/ui/Pricing/PricingCard';
import TableDefault from '../../components/ui/Table/TableDefault';

const Dashboard = () => {
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
  return (
    <div className="space-y-10">
      <NavLeft />
      <AnnouncementOne />
      <CircularAvatars />
      <TableDefault products={products} />
      <PricingCard />
    </div>
  );
};

export default Dashboard;
