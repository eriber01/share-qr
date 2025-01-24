import { currentUser } from "@clerk/nextjs/server";
import prisma from '../../../../../services/prisma';
import { getCurrentUser } from "@/services/getCurrentUser";

export async function PUT() {

  try {

    const { user, userClerk } = await getCurrentUser()

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