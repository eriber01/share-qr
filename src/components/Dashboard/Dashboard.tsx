import { InboxIcon } from '../ui/InboxIcon'
import { DashboardCard } from './DashboardCard'
import { FileIcon } from '../ui/FileIcon'
import { AddQrButton } from '../ui/AddQrButton'
import { CreateQr } from '../Modals/CreateQr/CreateQr'

const Dashboard = () => {
  return (
    <main className="flex-1 p-4 min-h-screen min min-w-full">
      <CreateQr />
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Here you can access all the features of our application.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <DashboardCard
            title='Inbox'
            description='Review your Message'
            content={
              <div className="flex h-10 items-center justify-center">
                <InboxIcon className="h-8 w-8" />
              </div>
            }
          />
          <DashboardCard
            title='Qr Shared'
            // description='Share a Qr width a friend'
            description='View the Qr than you shared'
            content={
              <div className="flex h-10 items-center justify-center">
                <FileIcon className="h-8 w-8" />
              </div>
            }
          />
          <div>
            <AddQrButton />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard