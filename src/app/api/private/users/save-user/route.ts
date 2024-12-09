import { currentUser } from "@clerk/nextjs/server";
import prisma from '../../../../../services/prisma';
import { User } from "@prisma/client";

export async function PUT() {

  try {

    const userClerk = await currentUser()

    if (!userClerk) {
      return Response.json({ message: 'No found a User' }, { status: 500 })
    }

    const user = await prisma.user.findFirst({ where: { userId: userClerk.id } })

    if (user) {
      return Response.json({ user }, { status: 200 })
    }

    const createUser = await prisma.user.create({
      data: {
        userId: userClerk.id,
        firstName: userClerk.firstName!,
        lastName: userClerk.lastName!,
        userEmails: {
          create: userClerk.emailAddresses.map(item => ({
            id: item.id,
            emailAddress: item.emailAddress
          }))
        }
      }
    })

    return Response.json({ user: createUser }, { status: 200 })

  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}