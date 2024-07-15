import React from 'react'
import { InboxIcon } from '../ui/InboxIcon'
import { CalendarIcon } from '../ui/CalendarIcon'
import { DashboardCard } from './DashboardCard'

const Dashboard = () => {
  return (
    <main className="flex-1 p-4 min-h-screen min min-w-full">
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Here you can access all the features of our application.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <DashboardCard
            title='Inbox'
            description='Revisa tus mensajes'
            content={
              <div className="flex h-10 items-center justify-center">
                <InboxIcon className="h-8 w-8" />
              </div>
            }
          />
          <DashboardCard
            title='Calendar'
            description='Gestiona tus eventos'
            content={
              <div className="flex h-10 items-center justify-center">
                <CalendarIcon className="h-8 w-8" />
              </div>
            }
          />
        </div>
      </div>
    </main>
  )
}

export default Dashboard