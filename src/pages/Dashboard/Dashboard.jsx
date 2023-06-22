import React from 'react';

import AnnouncementOne from '../../components/ui/Elements/Announcement/AnnouncementOne';
import CircularAvatars from '../../components/ui/Elements/Avatar/CircularAvatars';
import NavLeft from '../../components/ui/Navigation/AllNavbar/NavLeft';
import PricingCard from '../../components/ui/Pricing/PricingCard';
import TableDefault from '../../components/ui/Table/TableDefault';

const Dashboard = () => {
  return (
    <div className=" space-y-10">
      <NavLeft />
      <AnnouncementOne />
      <CircularAvatars />
      <TableDefault />
      <PricingCard />
    </div>
  );
};

export default Dashboard;
