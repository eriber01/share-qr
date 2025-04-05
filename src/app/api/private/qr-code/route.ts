import prisma from '../../../../services/prisma';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { customAlphabet } from 'nanoid';

dayjs.extend(utc)
dayjs.extend(timezone)


export async function PUT(req: Request) {
  const nanoid = customAlphabet('1234567890abcdefghijklmnopzw', 21);
  const { data, user } = await req.json()
  console.log({ data, user });

  let urlId
  let urlIdUnique = false

  while (!urlIdUnique) {
    urlId = nanoid()
    const share = await prisma.shares.findUnique({
      where: {
        urlId
      }
    })

    if (!share) {
      urlIdUnique = true
    }
  }

  try {
    const share = await prisma.shares.create({
      data: {
        userId: user.id,
        isDue: data.isDue,
        endDate: dayjs(data.endDate).utc().startOf('day').toDate(),
        needCode: data.needCode,
        codeAccess: data.codeAccess,
        oneView: data.oneView,
        urlId: urlId!,
        sharesData: {
          create: {
            data: data.message
          }
        },
        sharesEmails: {
          create: {
            email: data.emailSend,
            isView: false
          }
        }
      }
    })

    return Response.json({ share }, { status: 200 })
  } catch (error) {
    console.log({ error });
    return Response.json({ error: 'Error creating the Share Qr' }, { status: 500 })
  }
}