import CMS from 'netlify-cms-app'
import { pages } from './collections/pages'

// eslint-disable-next-line space-before-function-paren
export function init(options?: { baseURL?: string; localBackend?: boolean }) {
  if (!window) {
    return
  }

  const parentWidget = (window as any).NetlifyCmsWidgetParent
  CMS.registerWidget('parent', parentWidget.control, parentWidget.preview)

  CMS.init({
    config: {
      load_config_file: false,
      display_url: options?.baseURL,
      site_url: options?.baseURL,

      local_backend: options?.localBackend || true,
      backend: {
        name: 'git-gateway'
      },

      media_folder: 'static/uploads',
      public_folder: '/uploads',

      editor: {
        preview: false
      },

      collections: [
        pages
      ]
    }
  })
}
