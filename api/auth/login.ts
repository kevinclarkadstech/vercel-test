
import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.json({ name: 'Fred', email: 'fred@example.com' })
}