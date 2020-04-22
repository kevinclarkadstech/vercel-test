
import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
  res.json({ name: 'Fred', email: 'fred@example.com' })
}