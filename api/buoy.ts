import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as fs from 'fs';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id = '001' } = req.query
  
  const filePath = path.join(process.cwd(), 'public', 'data', `buoy${id}.json`);

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(data);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(json);
  } catch (error) {
    return res.status(404).json({ error: `bouy with id ${id} not found`});
  }
}
