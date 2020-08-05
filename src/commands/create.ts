import {Command} from '@oclif/command'
import {parsePassedArgs, runHygen} from '../lib'
import {Config} from '../config'

const {featuresPath, usingTemplate} = Config.readRc()

export default class Create extends Command {
  static args = [
    {
      name: 'feature',
    },
    {
      name: 'template',
      default: usingTemplate,
    },
    {
      name: 'featuresPath',
      default: featuresPath,
    },
  ]

  async run() {
    const {args} = this.parse(Create)

    const [
      featureName,
      template,
      featuresPath,
    ] = parsePassedArgs([args.feature, args.template, args.featuresPath])

    runHygen([
      'feature',
      template,
      `--featureName=${featureName}`,
      `--featuresPath=${featuresPath}`,
    ])
  }
}
