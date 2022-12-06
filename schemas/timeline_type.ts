export default {
    name: 'timeline_category',
    title: '时间线类别',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '类别名称',
            type: 'string',
        },
        {
            name: "order",
            title: "顺序",
            type: "number",
        },
        {
            name: 'description',
            title: '表述',
            type: 'text',
        },
    ],
    orderings: [
        {
            title: "顺序",
            name: "sortFeatured",
            by: [
                { field: "order", direction: "desc" }
            ]
        },
    ]

}
