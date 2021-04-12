import {
  CmsField,
  CmsFieldBase,
  CmsFieldBoolean,
  CmsFieldCode,
  CmsFieldColor,
  CmsFieldDateTime,
  CmsFieldFileOrImage,
  CmsFieldHidden,
  CmsFieldList,
  CmsFieldMap,
  CmsFieldMarkdown,
  CmsFieldNumber,
  CmsFieldObject,
  CmsFieldRelation,
  CmsFieldSelect,
  CmsFieldStringOrText
} from 'netlify-cms-core'

type BaseField = Omit<CmsFieldBase, 'name' | 'label' | 'widget'>

export const string = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldStringOrText, 'widget'>
): CmsField => ({ label, name, widget: 'string', ...options })

export const text = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldStringOrText, 'widget'>
): CmsField => ({ label, name, widget: 'text', ...options })

export const bool = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldBoolean, 'widget'>
): CmsField => ({ label, name, widget: 'boolean', ...options })

export const datetime = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldDateTime, 'widget'>
): CmsField => ({ label, name, widget: 'datetime', ...options })

export const number = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldNumber, 'widget'>
): CmsField => ({ label, name, widget: 'number', ...options })

export const code = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldCode, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'code',
  ...options
})

export const markdown = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldMarkdown, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'markdown',
  ...options
})

export const color = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldColor, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'color',
  ...options
})

export const file = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldFileOrImage, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'file',
  ...options
})

export const image = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldFileOrImage, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'image',
  ...options
})

export const hidden = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldHidden, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'hidden',
  ...options
})

export const list = (
  label: string,
  name: string,
  fields: CmsField | CmsField[],
  options?: BaseField & Omit<CmsFieldList, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'list',
  ...Array.isArray(fields) ? { fields } : { field: fields },
  ...options
})

export const map = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldMap, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'map',
  ...options
})

export const object = (
  label: string,
  name: string,
  fields: CmsField[],
  options?: BaseField & Omit<CmsFieldObject, 'fields' | 'widget'>
): CmsField => ({
  label,
  name,
  fields,
  widget: 'object',
  ...options!
})

export const relation = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldRelation, 'widget'>
): CmsField => ({
  label,
  name,
  widget: 'relation',
  ...options!
})

export const select = (
  label: string,
  name: string,
  options?: BaseField & Omit<CmsFieldSelect, 'widget' | 'label' | 'name'>
): CmsField => ({
  label,
  name,
  widget: 'select',
  ...options!
})
