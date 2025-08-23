import React from 'react'
import { DataTable } from './features/data-table';
import { columns } from './features/columns';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Page = () => {
  const data  = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]
  return (
    <div className="py-4 md:py-6 px-4 lg:px-6">
  <Card className="@container/card">
    <CardHeader>
      <CardTitle>Categories</CardTitle>
      <CardDescription>
        <span>List of categories</span>
      </CardDescription>
      <CardAction>
        <Button>Add a new record</Button>
      </CardAction>
    </CardHeader>

    <CardContent>
      <DataTable columns={columns} data={data} />
    </CardContent>
  </Card>
</div>

  )
}

export default Page;