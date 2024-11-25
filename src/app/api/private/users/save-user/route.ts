import { currentUser } from "@clerk/nextjs/server";

export async function PUT() {

  try {

    const userClerk = await currentUser()
    console.log(userClerk);

    return Response.json({ user: userClerk }, { status: 200 })

  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}