
import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '');
  res.json({ name: 'Fred', email: 'fred@example.com' })
}