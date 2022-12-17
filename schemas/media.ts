import { Rule } from "sanity";

export default {
    name: 'media',
    title: '影音',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '标题',
            type: 'string',
            validation:(Rule:Rule)=>Rule.required().error("请输入标题名称")
        },
        {
            name: 'slug',
            title: 'URL',
            description:"URL链接",
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation:(Rule:Rule)=>Rule.required().error("请输入要生成链接URL，否则无法显示！")
        },
        {
            name: 'mediaUrl',
            title: '媒体材料链接',
            description: "音频或者视频URL(仅支持OneDrive和Cloudflare R2)",
            type: 'string',
            valiadtion:(Rule:Rule)=>Rule.required().error("请输入媒体资料链接")
        },

        {
            name: 'imageUrl',
            title: 'Main Cover Image',
            description:"配图图片链接(仅支持OneDrive和Cloudflare R2)",
            type: 'string',
        },
        {
            name: 'description',
            title: 'Short Description',
            description: "视频短描述（简单概括该媒体资料的信息，不要超过140个字）",
            type: 'text',
            validdation: (Rule:Rule) => Rule.max(140).error("短描述不要超过140个字")
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
            subtitle: 'description',
        },
    },
}