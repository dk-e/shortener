import redis from "@/lib/redis"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const id = new URL(req.url).pathname.split("/")[1]

  const url = await redis.get(id)

  if (!url) return NextResponse.json({ error: "No url found" }, { status: 404 })

  return NextResponse.redirect(url as string)
}
