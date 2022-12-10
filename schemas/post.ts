import { Rule } from "sanity"


export default {
  name: 'post',
  title: '帖子',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: "文章标题",
      type: 'string',
      validation: (Rule:Rule) => {
        return Rule.required().error("请输入标题")
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      description: "url链接(必填，如果你不知道怎么命名，请暂时随机填拼音，果酱会重新填写)",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule:Rule) => {
        return Rule.required().error("链接名称（可暂时随机拼音）")
      }

    },
    {
      name: 'author',
      title: 'Author',
      description: "作者",
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule:Rule) => {
        return Rule.required().error("请选择作者，不知道请选择匿名")
      }
    },
    {
      name: 'mainImageUrl',
      description: "文章图片链接，e.g., OneDrive",
      title: 'Main image URL',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Featured',
      description: "是否为‘置顶（精品）’文章",
      type: 'boolean',
      initialVale: false,
    },

    {
      name: 'category',
      title: 'Category',
      description: "分类",
      type: 'reference',
      to: { type: 'category' },
      validation: (Rule:Rule) => {
        return Rule.required().error("请选择分类！否则不会在网页显示")
      }
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      description: "子分类",
      type: 'reference',
      to: { type: 'subcategory' },
      validation: (Rule:Rule) => {
        return Rule.required().error("请选择子分类！否则不会在网页显示")
      }
    },

    {
      name: 'tags',
      title: 'Tags',
      description: "文章标签（请选择1-2个文章标签）",
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: "tags"
      }
    },

    {
      name: 'publishedAt',
      description: "发表时间",
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'writtenAt',
      description: "创作时间",
      title: 'Written at',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Short Description',
      description: '文章摘要（请控制在140字之内）',
      type: 'text',
      validation: (Rule:Rule) => {
        return Rule.required().max(150).error("文章摘要，140字之内")
      }
    },
    {
      name: 'body',
      description: "文章主体",
      title: 'Body',
      type: 'blockContent',
    },
  ],

  orderings: [
    {
      title: "Featured",
      name: "sortFeatured",
      by: [
        { field: "featured", direction: "asc" }
      ]
    },
    {
      title: "作者",
      name: "sortAuthor",
      by: [
        { field: "author.name", direction: "asc" }
      ]
    },
    {
      title: "写作时间",
      name: "sortWritten",
      by: [
        { field: "writtenAt", direction: "desc" }
      ]
    },
    {
      title: "发表时间",
      name: "sortWritten",
      by: [
        { field: "publishAt", direction: "desc" }
      ]
    },

  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      featured: 'featured',
    },
    prepare(selection: any) {
      const { author, featured } = selection
      const f = featured ? "Featured" : ""
      return Object.assign({}, selection, {
        subtitle: author && `by ${author} ${f}`,
      })
    },
  },
}
