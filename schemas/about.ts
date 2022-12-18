import {Rule} from 'sanity'

export default {
  name: 'about',
  title: '关于我们',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '标题',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('请输入标题名称'),
    },
    {
      name: 'subtitle',
      title: '副标题',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('请输入副标题名称'),
    },
    {
      name: 'quote',
      title: '引用格言',
      description: '请不要超过140个字',
      type: 'string',
      //   validation: (Rule: Rule) => Rule.required().max(140).error('请输入标题名称'),
    },
    {
      name: 'slug',
      title: 'URL',
      description: '用于关注阅览URL链接',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required().error('请输入要生成链接URL，否则无法显示！'),
    },
    {
      name: 'imageUrl',
      title: 'Main Cover Image',
      description: '配图图片链接(仅支持OneDrive和Cloudflare R2)',
      type: 'string',
    },
    {
      name: 'content',
      title: '内容',
      description: '此处填内容',
      type: 'blockContent',
    },
    {
      name: 'footer',
      title: '落款',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
