import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  configuredDataSource: string,
  sampleCensusCountyData: string
}

export type IMConfig = ImmutableObject<Config>
