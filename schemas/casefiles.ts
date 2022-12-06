export default {
    name: 'casefiles',
    title: '卷宗',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'mainImageUrl',
            title: 'Main image URL',
            type: 'url',
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            initialVale: false,
        },

        {
            name: 'classification',
            title: 'Classification',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: "tags"
            }
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'writtenAt',
            title: 'Written at',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}
