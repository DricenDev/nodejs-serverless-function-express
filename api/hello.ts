import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id = '001' } = req.query
  
  var json = {
    id: id,
  }
    
  
  return res.json(json)


}
