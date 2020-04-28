
import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');
  res.setHeader('Access-Control-Allow-Headers', 'Accept, Accept-Language, Content-Language, Content-Type, authToken');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS');
  // if (req.method === 'OPTIONS') {
  //   res.status(200).send({});
  // }
  res.json({ name: 'Fred', email: 'fred@example.com' })
}