import CustomDataTable from '@/components/backoffice/CustomDataTable'
import DashboardCharts from '@/components/backoffice/DashboardCharts'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large cards */}
      <LargeCards />
      {/* Small Cards */}
      <SmallCards />
      {/* Charts Cards */}
      <DashboardCharts />
      {/* Recent Orders Table */}
      <CustomDataTable />
      </div>
  )
}
