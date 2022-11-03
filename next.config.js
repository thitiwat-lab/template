const withAntdLess = require('next-plugin-antd-less');
const path = require('path');
/**
* @type {import('next').NextConfig}
*/
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  ...withAntdLess({
    modifyVars: {
      '@primary-color': '#1E3E72',
      '@body-background': '#F5F5F5',
      '@font-family': "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      '@border-radius-base': '4px',
      '@layout-header-background': '#FFFFFF',
      '@text-color': '#262626',
      '@btn-primary-bg': '#1E3E72',
      '@table-header-bg': '#F7F8FB'
    },
    webpack: (config) => {
      return config;
    },
  })
}