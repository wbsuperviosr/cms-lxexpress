export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: "文章标题",
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: "url链接",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      description: "作者",
      type: 'reference',
      to: { type: 'author' },
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
      name: 'categories',
      title: 'Categories',
      description: "分类",
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'tags',
      title: 'Tags',
      description: "文章tag",
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
      name: 'body',
      description: "文章主体markdown",
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
