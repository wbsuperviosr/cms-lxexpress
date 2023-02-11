import {Rule} from 'sanity'

export default {
  name: 'voice',
  title: '观者评说',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: '文章标题',
      type: 'string',
      validation: (Rule: Rule) => {
        return Rule.required().error('请输入标题')
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'url链接(必填，如果你不知道怎么命名，请暂时随机填拼音，果酱会重新填写)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => {
        return Rule.required().error('链接名称（可暂时随机拼音）')
      },
    },
    {
      name: 'author',
      title: 'Author',
      description: '作者',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule: Rule) => {
        return Rule.required().error('请选择作者，不知道请选择匿名')
      },
    },
    {
      name: 'mainImageUrl',
      description: '文章配图链接，e.g., OneDrive',
      title: 'Main image URL',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Featured',
      description: '是否为‘置顶（精品）’文章',
      type: 'boolean',
      initialVale: false,
    },

    {
      name: 'category',
      title: 'Category',
      description: '分类',
      type: 'string',
      options: {
        list: ['价值讨论', '法律研讨', '案情推理', '创意作品', '媒体报道'],
        layout: 'radio',
      },
      validation: (Rule: Rule) => {
        return Rule.required().error('请选择分类！否则不会在网页显示')
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      description: '文章标签（请选择1-2个文章标签,输入后按回车键确认）',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },

    {
      name: 'publishedAt',
      description:
        '发表时间。发表时间只指发表在我们网站的时间，不一定是写作时间。例如刘鑫在2017年的文章，我们在2022年12月12日进行收录。',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required().error('请选择发表时间，点击右边的日历项进行选择'),
    },
    {
      name: 'writtenAt',
      description: '写作时间。如果不清楚，就大概选一个吧，这个应该也没有人会特别注意。',
      title: 'Written at',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required().error('请选择写作时间，点击右边的日历项进行选择'),
    },
    {
      name: 'description',
      title: 'Short Description',
      description: '文章摘要（请控制在140字之内）',
      type: 'text',
      validation: (Rule: Rule) => {
        return Rule.required().max(150).error('文章摘要，140字之内')
      },
    },
    {
      name: 'body',
      description: '文章主体',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule: Rule) => Rule.required().error('请填写文字啊'),
    },
    {
      name: 'related',
      title: '更多阅读',
      description:
        '用于作证事件的图片链接和标题，若未知可以留空。点击下方Add item进行添加，添加完毕后随意点击弹窗之外的地方就可以保存并且自动保存。',
      type: 'array',
      of: [
        {
          title: '文章链接',
          name: 'article_url',
          type: 'object',
          fields: [
            {
              title: '名称',
              description: '文章的标题名称',
              name: 'title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('文章名称不能为空'),
            },
            {
              title: '链接',
              description: '文章链接',
              name: 'urlField',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('文章名称不能为空'),
            },
            {
              title: '专栏',
              description: '专栏名称',
              name: 'category',
              type: 'string',
              validation: (Rule: Rule) =>
                Rule.required().max(4).error('专栏名称不能为空且必须为4个字'),
            },
          ],
        },
      ],
    },
    {
      name: 'theme',
      title: '主题',
      description: '帖子类别（默认项，无需修改）',
      type: 'string',
      initialValue: '观者评说',
    },
  ],

  orderings: [
    {
      title: 'Featured',
      name: 'sortFeatured',
      by: [{field: 'featured', direction: 'asc'}],
    },
    {
      title: '作者',
      name: 'sortAuthor',
      by: [{field: 'author.name', direction: 'asc'}],
    },
    {
      title: '写作时间',
      name: 'sortWritten',
      by: [{field: 'writtenAt', direction: 'desc'}],
    },
    {
      title: '发表时间',
      name: 'sortWritten',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category',
      featured: 'featured',
    },
    prepare(selection: any) {
      const {author, category, featured} = selection
      const f = featured ? 'Featured' : ''
      return Object.assign({}, selection, {
        subtitle: author && `${category} ${author} ${f}`,
      })
    },
  },
}
