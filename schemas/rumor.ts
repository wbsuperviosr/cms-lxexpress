import {Rule} from 'sanity'

export default {
  name: 'rumor',
  title: '谣言澄清',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: '谣言疑问',
      description:
        '请根据谣言内容转化为疑问句。例如：“刘鑫不给江秋莲道过歉”，可以改为“刘鑫有没有道歉？”，或者“刘鑫从来没有给江歌妈妈道过歉吗？”',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('请输入谣言疑问'),
    },
    {
      name: 'importance',
      title: '严重程度',
      description:
        '主管判断性质，1-5分级，1最轻，例如“刘鑫有没有参加葬礼”，5最重，例如“刘鑫有没有推江歌出去挡刀”。这个非常主观，先预留这个位置，具体放不放在网上我们可以讨论商量',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
        layout: 'radio',
      },
    },
    {
      name: 'author',
      title: '信息提供者',
      description: '提供该谣言澄清的作者（非必选，可匿名）',
      type: 'string',
    },
    {
      name: 'rumor_spreader',
      title: '谣言来源者',
      description: '最先传出该谣言的是谁，例如：徐静波，江秋莲等等',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'rumor_victim',
      title: '被造谣者',
      description: '被造谣的是谁，例如：刘鑫，江歌等等',
      type: 'array',
      of: [{type: 'string'}],
    },

    {
      name: 'rumor',
      title: '谣言',
      description: '谣言的内容',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('请输入谣言的内容'),
    },
    {
      name: 'truth',
      title: '真相',
      description: '真相的内容',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('请输入真相的内容'),
    },
    {
      name: 'tags',
      title: '标签',
      description: '谣言标签（请用1-2个谣言标签用于分类谣言，输入后按回车键确认）',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'rumor_images',
      title: '谣言图片链接',
      description:
        '用于作证谣言的图片，若未知可以留空。点击下方Add item进行添加，添加完毕后随意点击弹窗之外的地方就可以保存并且自动保存。',
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
              description: '图片链接(仅支持OneDrive和Cloudflare R2)',
              name: 'urlField',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('图片链接不能为空'),
            },
          ],
        },
      ],
    },
    {
      name: 'truth_images',
      title: '真相图片链接',
      description:
        '用于作证真相的图片，若未知可以留空。点击下方Add item进行添加，添加完毕后随意点击弹窗之外的地方就可以保存并且自动保存。',
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
              description: '图片链接(仅支持OneDrive和Cloudflare R2)',
              name: 'urlField',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('图片链接不能为空'),
            },
          ],
        },
      ],
    },

    {
      name: 'rumor_posts',
      title: '谣言文章链接',
      description:
        '用于作证谣言的文章，若未知可以留空。点击下方Add item进行添加，添加完毕后随意点击弹窗之外的地方就可以保存并且自动保存。',
      type: 'array',
      of: [
        {
          title: '文章链接',
          name: 'posts_urlObject',
          type: 'object',
          fields: [
            {
              title: '文章名称',
              description: '（例如江歌刘鑫对话微信截图1）',
              name: 'url_title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('图片名称不能为空'),
            },
            {
              title: '链接',
              description: '文章链接(可填外链)',
              name: 'urlField',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('图片链接不能为空'),
            },
          ],
        },
      ],
    },
    {
      name: 'truth_posts',
      title: '真相文章链接',
      description:
        '用于作证真相的文章，若未知可以留空。点击下方Add item进行添加，添加完毕后随意点击弹窗之外的地方就可以保存并且自动保存。',
      type: 'array',
      of: [
        {
          title: '文章链接',
          name: 'posts_urlObject',
          type: 'object',
          fields: [
            {
              title: '文章名称',
              description: '（例如江歌刘鑫对话微信截图1）',
              name: 'url_title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('图片名称不能为空'),
            },
            {
              title: '链接',
              description: 'v链接(可填外链)',
              name: 'urlField',
              type: 'string',
              validation: (Rule: Rule) => Rule.required().error('图片链接不能为空'),
            },
          ],
        },
      ],
    },
  ],
  orderings: [
    {
      title: '谣言疑问',
      name: 'sortQuestion',
      by: [{field: 'question', direction: 'desc'}],
    },
    {
      title: '严重程度',
      name: 'sortImportance',
      by: [{field: 'importance', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'question',
    },
  },
}
