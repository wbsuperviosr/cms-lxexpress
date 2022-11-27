export default {
    name: 'media',
    title: 'Media',
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
            name: 'mediaUrl',
            title: 'Media URL',
            description: "音视频URL",
            type: 'url',
        },

        {
            name: 'imageUrl',
            title: 'Cover Image URL',
            type: 'url',
        },
        {
            name: 'description',
            title: 'Short Description',
            description: "视频短描述",
            type: 'text',
        },
        {
            name: 'content',
            title: 'Content',
            description: "视频长描述",
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'imageUrl',
        },
    },
}