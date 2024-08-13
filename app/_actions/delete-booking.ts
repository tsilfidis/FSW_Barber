"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

export const deleteBooking = async (bookinkId: string) => {
  await db.booking.delete({
    where: {
      id: bookinkId,
    },
  })
  revalidatePath("/bookings")
}
