export default {
    name: 'subcategory',
    title: '子类别',
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
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
}
