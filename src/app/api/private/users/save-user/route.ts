import { currentUser } from "@clerk/nextjs/server";
import prisma from '../../../../../services/prisma';
import { User } from "@prisma/client";

export async function PUT() {

  try {
    const user = await prisma.user.findMany()
    console.log({ user });

    const userClerk = await currentUser()
    console.log(userClerk);

    if (!userClerk) {
      return Response.json({ message: 'No found a User' }, { status: 500 })
    }

    const payload:User = {
      firstName: userClerk?.firstName!,
      lastName: userClerk?.lastName!,
      userId: userClerk.id,

    }

    return Response.json({ user: userClerk }, { status: 200 })

  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}