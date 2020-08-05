import {runner} from 'hygen'
import execa from 'execa'
import {Logger} from 'hygen'
import Enquirer from 'enquirer'
import * as path from 'path'

const defaultTemplates = path.resolve(__dirname, '../templates')

export const runHygen = (args: string[]) => {
  runner(args, {
    templates: defaultTemplates,
    cwd: process.cwd(),
    logger: new Logger(console.log.bind(console)),
    createPrompter: () => Enquirer as any,
    exec: (action, body) => {
      const opts = body && body.length > 0 ? {input: body} : {}
      return execa(action, opts)
    },
    debug: Boolean(process.env.DEBUG),
  })
}

