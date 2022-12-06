export default {
    name: 'people',
    title: '人物',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'imageUrl',
            title: 'Image URL',
            type: 'url',
        },
        {
            name: 'description',
            title: 'Short Description',
            type: 'text',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}
