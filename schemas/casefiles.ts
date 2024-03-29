import {Rule} from 'sanity'

export default {
  name: 'casefiles',
  title: '卷宗',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '名称',
      description: '卷宗名称',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('请输入卷宗名称'),
    },

    {
      name: 'description',
      title: '摘要',
      description: '卷宗摘要（不要超过140个字）',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(140).error('请输入卷宗摘要（140字之内）'),
    },
    {
      name: 'header',
      title: '卷宗头文件',
      description: '展示卷宗的记录参与人员头文件，如“东京地方检察厅”，“检察官检事 渡边庆”等等',
      type: 'text',
    },
    {
      name: 'slug',
      title: '链接',
      type: 'slug',
      description: 'URL链接',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required().error('请输入卷宗链接，至少5个字符'),
    },
    {
      name: 'order',
      title: '顺序值',
      description: '用于排列卷宗的顺序值（整数或者小数）',
      type: 'number',
    },
    {
      name: 'imageonly',
      title: '图片卷宗',
      description: '该卷宗是否仅有图片格式',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'mainImageUrl',
      description: '配图链接(非必要)',
      title: '配图链接',
      type: 'url',
    },
    {
      name: 'featured',
      title: '置顶',
      description: '是否是重要卷宗（影响置顶）',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'tags',
      title: 'Tags',
      description: '卷宗标签（请用1-2个谣言标签用于卷宗标签，输入后按回车键确认）',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'image_urls',
      title: '图片链接',
      description:
        '用于作证事件的图片链接和标题，若未知可以留空。点击下方Add item进行添加，添加完毕后随意点击弹窗之外的地方就可以保存并且自动保存。',
      type: 'array',
      of: [
        {
          title: '图片链接',
          name: 'image_urlObject',
          type: 'object',
          fields: [
            {
              title: '图片名称',
              description: '（例如江歌刘鑫对话微信截图1）',
              name: 'url_title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('图片名称不能为空'),
            },
            {
              title: '链接',
              description: '图片链接',
              name: 'urlField',
              type: 'string',
            },
            {
              title: '宽度',
              description: '图片/视频宽度',
              name: 'width',
              type: 'string',
            },
            {
              title: '高度',
              description: '图片/视频高度',
              name: 'height',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'classification',
      title: '卷宗类别',
      description: '请点击下拉菜单进行选择',
      type: 'string',
      options: {
        list: ['搜查报告书', '笔录陈述书', '公审辩论书', '询问笔录书', '法院判决书'],
        layout: 'radio',
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: '发布时间',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      validation: (Rule: Rule) => Rule.required().error('请输入发表时间'),
    },
    {
      name: 'writtenAt',
      title: 'Written at',
      description: '写作时间',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      validation: (Rule: Rule) => Rule.required().error('请输入写作时间'),
    },
    {
      name: 'body',
      title: '内容主体',
      description: '卷宗内容',
      type: 'blockContent',
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
  ],

  orderings: [
    {
      title: '顺序值',
      name: 'sortOrder',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: '写作时间',
      name: 'sortWrittenAt',
      by: [{field: 'writtenAt', direction: 'asc'}],
    },
    {
      title: '发表时间',
      name: 'sortPublishAt',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      order: 'order',
    },
    prepare(selection: any) {
      const {subtitle, order} = selection
      const f = order ? order : ''
      return Object.assign({}, selection, {
        subtitle: `${f} ${subtitle}`,
      })
    },
  },
}
