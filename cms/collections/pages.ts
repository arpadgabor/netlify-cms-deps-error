import { folder } from '../utils/collections'
import { hidden, string, text } from '../utils/fields'

export const pages = folder('Pages', 'pages',
  [
    string('Title', 'title'),
    text('Description', 'description'),
  ],
  {
    label_singular: 'Page',
    summary: '{{title}}',
    preview_path: '{{fullPath}}',

    nested: { depth: 100 },
    meta: {
      path: {
        widget: 'parent',
        index_file: 'index',
        label: 'Parent'
      }
    }
  }
)
