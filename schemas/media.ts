import {Rule} from 'sanity'

export default {
  name: 'media',
  title: '影音',
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
      description: '请不要超过15个字',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(15).error('请输入标题名称'),
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
      name: 'mediaUrl',
      title: '媒体材料链接',
      description:
        '音频或者视频URL(仅支持Cloudflare R2，请输入你上传到Cloudflare R2的文件路径，例如“影音资料/报警录音.mp4”)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('请输入媒体资料链接'),
    },
    {
      name: 'category',
      title: '影音类别',
      description: '用于区分视频内容的分类',
      type: 'string',
      options: {
        list: ['案情相关', '媒体报道', '创意作品'],
        layout: 'radio',
      },
    },
    {
      name: 'tags',
      title: '标签',
      description: '视频标签（请选择1-2个文章标签）',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'imageUrl',
      title: 'Main Cover Image',
      description: '配图图片链接(仅支持OneDrive和Cloudflare R2)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short Description',
      description: '视频短描述（简单概括该媒体资料的信息，不要超过140个字）',
      type: 'text',
      validdation: (Rule: Rule) => Rule.max(140).error('短描述不要超过140个字'),
    },
    {
      name: 'content',
      title: 'Content',
      description: '视频长描述',
      type: 'blockContent',
    },
    {
      name: 'writtenAt',
      description: '创作时间。如果不清楚，就大概选一个吧，这个应该也没有人会特别注意。',
      title: '创作时间',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required().error('请选择创作时间，点击右边的日历项进行选择'),
    },
    {
      name: 'publishedAt',
      description: '发表时间。如果不清楚，就大概选一个吧，这个应该也没有人会特别注意。',
      title: '发表时间',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required().error('请选择发表时间，点击右边的日历项进行选择'),
    },
    {
      name: 'download_link',
      title: '下载链接',
      description: '是否提供下载链接',
      type: 'string',
    },
    {
      name: 'download_meta',
      title: '下载说明',
      description: '下载链接辅助说明，例如“提取码：XXXXX”',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
