export default {
    widgets: [
        {
            name: 'document-list',
            options: {
                title: 'Last edited documents',
                order: '_updatedAt desc',
                types: ['post']
            },
            layout: {
                width: 'auto',
                height: 'large'
            }
        },
        {
            name: 'project-info'
        },
        {
            name: 'project-users'
        }
    ]
}