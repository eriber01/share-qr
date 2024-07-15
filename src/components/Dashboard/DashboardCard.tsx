'use client'
import { ReactElement } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface Props {
  title: string
  description: string
  content: ReactElement
}

export const DashboardCard = ({ title, content, description }: Props) => {
  return (
    <Card
      className='shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer'
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  )
}
