export interface Repository {
  full_name: string
  id: number
  issues_url: string
  name: string
  url: string
}

export interface VersionResponse {
  tags: Tags
  versions: Version[]
}

export interface Tags {
  [name: string]: string
}

export type Version = string
