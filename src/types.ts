export interface Repository {
  /* eslint-disable-next-line camelcase */
  full_name: string
  id: number
  /* eslint-disable-next-line camelcase */
  issues_url: string
  name: string
  url: string
}

export type Version = string

export interface VersionResponse {
  tags: Tags
  versions: Version[]
}

export interface Tags {
  [name: string]: string
}
