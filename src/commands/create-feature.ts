import {Command} from '@oclif/command'
import {camelCase} from 'change-case'
import {parsePassedArgs, runHygen} from '../lib'
import {Config} from '../config'

const {featuresPath, usingTemplate} = Config.readRc()

export default class CreateFeature extends Command {
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
    const {args} = this.parse(CreateFeature)

    const [
      featureName,
      template,
      featuresPath,
    ] = parsePassedArgs([args.feature, args.template, args.featuresPath])

    runHygen([
      'feature',
      template,
      `--featureName=${featureName}`,
      `--camelFeatureName=${camelCase(featureName)}`,
      `--featuresPath=${featuresPath}`,
    ])
  }
}
