import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as fs from 'fs';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id = '001' } = req.query
  
  const data = fs.readFileSync('../data/boya'+id+'.json', 'utf-8');
  const json = JSON.parse(data);
  
  return res.json(json)
}
