import { AxiosInstance } from 'axios'
import Request from './Request'
import { Organization } from '../..'

export default class Organizations extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  list(): Promise<Organization[]> {
    const path = '/organizations'
    return this.get<Organization[]>(path)
  }
}
