import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

export default async function name(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, buildNext)
}
