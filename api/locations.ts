import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as fs from 'fs';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { user = 'anonymous' } = req.query

  const filePath = path.join(process.cwd(), 'public', 'general', 'locations.json');

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(data);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(json);
  } catch (error) {
    return res.status(500).json({ error: 'location data not found' });
  }
}
