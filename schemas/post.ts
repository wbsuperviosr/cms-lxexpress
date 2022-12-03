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
      type: 'reference',
      to: { type: 'category' },
      // of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'subcategories',
      title: 'Subcategories',
      description: "子分类",
      type: 'reference',
      to: { type: 'subcategory' },
      // of: [{ type: 'reference', to: { type: 'category' } }],
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
      name: 'description',
      title: 'Short Description',
      description: '文章摘要',
      type: 'text',
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
      title: "Author",
      name: "sortAuthor",
      by: [
        { field: "author.name", direction: "asc" }
      ]
    },
    {
      title: "Latest Written Date",
      name: "sortWritten",
      by: [
        { field: "writtenAt", direction: "desc" }
      ]
    },
    {
      title: "Latest Publish Date",
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
