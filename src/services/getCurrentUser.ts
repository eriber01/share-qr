import { currentUser } from "@clerk/nextjs/server"
import prisma from './prisma';

export const getCurrentUser = async () => {
  const userClerk = await currentUser()

  if (!userClerk) {
    throw new Error("No found a User");
  }

  const user = await prisma.user.findFirst({ where: { userId: userClerk.id } })

  if (user) {
    return { user, userClerk }
  }

  return { user: null, userClerk }
}