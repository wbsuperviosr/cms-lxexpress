export default {
  name: 'category',
  title: '类别',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
      name: 'subcategory',
      title: 'Subcategory',
      description: "子分类",
      type: 'array',
      of: [{ type: 'reference', to: { type: 'subcategory' } }],
    },

  ],
  orderings:[
    {
      title: "顺序",
      name: "orderOrder",
      by: [
        { field: "order", direction: "desc" }
      ]
    },
  ]
}
