import * as path from 'path'

interface SlicesRcConfig {
  featuresPath: string;
  sharedFeaturesPath: string;
  uiPath: string;
  apiPath: string;
  servicesPath: string;
  usingTemplate: string;
}

export class Config {
  static readRc(): SlicesRcConfig {
    const cwdPath = process.cwd()
    const configPath = path.resolve(process.cwd(), '.slicesrc.js')
    const rcConfig: SlicesRcConfig = require(configPath)

    return {
      apiPath: path.resolve(cwdPath, rcConfig.apiPath),
      featuresPath: path.resolve(cwdPath, rcConfig.featuresPath),
      servicesPath: path.resolve(cwdPath, rcConfig.servicesPath),
      sharedFeaturesPath: path.resolve(cwdPath, rcConfig.sharedFeaturesPath),
      uiPath: path.resolve(cwdPath, rcConfig.uiPath),
      usingTemplate: rcConfig.usingTemplate,
    }
  }
}
