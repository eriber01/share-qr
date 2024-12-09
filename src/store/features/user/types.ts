import { User } from "@prisma/client";

export interface userState {
  user: User | null
}