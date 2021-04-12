import { CmsCollection, CmsField, CmsCollectionFile } from 'netlify-cms-core'

type CollectionOptions = Omit<
  CmsCollection,
  'label' | 'name' | 'fields' | 'type' | 'create' | 'folder' | 'files'
>

const content = (path: string) => `content/${path}`

export const folder = (
  label: string,
  name: string,
  fields: CmsField[],
  options?: CollectionOptions
): CmsCollection => ({
  label,
  name,
  fields,
  create: true,
  folder: content(name),
  ...options
})

export const files = (
  label: string,
  name: string,
  files: CmsCollectionFile[],
  options?: CollectionOptions
): CmsCollection => ({
  label,
  name,
  files,
  create: false,
  delete: false,
  ...options
})

export const file = (
  label: string,
  name: string,
  fields: CmsField[],
  options?: CollectionOptions & Record<'extension', string>
): CmsCollectionFile => ({
  label,
  name,
  fields,
  file: content(name + `.${options?.extension}` ?? '.yml'),
  ...options
})
