import { getCurrentUser } from "@/services/getCurrentUser"

export async function GET() {

  try {
    const { user } = await getCurrentUser()

    if (user) {
      return Response.json({ user }, { status: 200 })
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}