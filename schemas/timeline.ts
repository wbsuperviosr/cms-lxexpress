import { Rule } from "sanity"

type Nullable = string | null;

export default {
    name: 'timeline',
    title: '时间线',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: '事件标题',
            type: 'string',
            description: "事件标题，请尽量控制在20字之内。",
            validation: (Rule: Rule) => (Rule.required().max(20).error("字数超过了20字。"))
        },

        {
            name: 'date',
            title: '日期',
            type: 'string',
            description: "事件发生日期，请尽可能明确。请采用YYYY-MM--DD的格式。例如：2017-08-03，如果具体日子不清楚，请用XX代替，例如2017-08-XX。注意一定要补全YYYY-MM-DD，不可以填2017-8-XX（8月未补全MM，应该填08），也不可以填2017-08-X（补全DD用XX），也不可以填（17-08-23，年份YYYY是2017，不可以用17代替）",
            validation: (Rule: Rule) => Rule.custom((name: string) => {
                const dates = name.split("-");
                if (dates.length != 3) {
                    return "没有补全YYYY-MM-DD格式"
                }
                const [year, month, day] = dates
                if (year.length != 4) {
                    return "年份必须是YYYY格式（例如2017），而你输入了" + year
                }
                if (month.length != 2) {
                    return "月份必须是MM格式（例如08月），而你输入了" + month
                } else {
                    if (isNaN(Number(month))) {
                        if (month == "XX") {
                            return "你用XX代替了月份，如果一个事件连月份都不清楚，还是不要放在时间线里面了吧"
                        } else {
                            return "请用'XX'代替未知"
                        }
                    } else {
                        const month_num = Number(month)
                        if (month_num < 0 || month_num > 12) {
                            return "月份必须是0到12之间的数，你输入了" + month
                        }
                    }
                }
                if (day.length != 2) {
                    return "请按照DD的格式，你输入了" + day
                } else {
                    if (isNaN(Number(day))) {
                        if (day != 'XX') {
                            return "如果不清楚日期，请用XX代替，你输入了" + day
                        }
                    } else {
                        const day_num = Number(day)
                        if (day_num < 0 || day_num > 31) {
                            return "日期必须是0到31之间的数，你输入了" + day
                        }
                    }
                }

                return true;
            })

        },
        {
            name: 'time',
            title: '时间',
            type: 'string',
            description: "事件时间。请用24小时制HH:MM表示，例如14：02。如果未知，则无需填写。若不清楚分钟，请用XX代替，例如14:XX。若不清楚具体时间，只知道发生在某个时间点之前或者之后，则用AA表示之后（After)，BB表示之前(Before)。例如，14点之后，则为14:AA，18点之前，则为18:BB",
            validation: (Rule: Rule) => Rule.custom((time: Nullable) => {
                if (time == null) {
                    return true
                }
                const times = time.split(":");
                if (times.length != 2) {
                    return "请用HH:MM的格式输入时间，你输入了" + time
                }
                const [hour, minute] = times;
                if (isNaN(Number(hour))) {
                    return "如果不清楚是几点，那就别输入时间了吧"
                } else {
                    const hour_num = Number(hour)
                    if (hour_num < 0 || hour_num > 23) {
                        return "时刻必须是0到24之间的数，你输入了" + hour
                    }
                }
                if (isNaN(Number(minute))) {
                    const allowed = ['XX','AA','BB']
                    if (!allowed.includes(minute)) {
                        return "如果不清楚分钟，请用'XX','AA','BB'代替'左右'，'之后','之前'，你输入了" + minute
                    }
                } else {
                    const minute_num = Number(minute)
                    if (minute_num < 0 || minute_num > 59) {
                        return "分钟必须是0到60之间的数，你输入了" + minute
                    }
                }
                return true
            })

        },
        {
            name: 'people',
            title: '人物',
            type: 'array',

            description: "事件核心人物，请参考【人物】页面（注意，事件“人物”与帖子“作者”是独立存在的）",
            of: [{
                type: 'reference',
                to: { type: 'people' },
                title: "添加事件人物（如果不存在可以创建）"
            }],
            validation: (Rule: Rule) => (Rule.custom((people: Array<string>) => {
                if (people.length == 0) {
                    return "你至少的选择一个当事人，或者创建一个"
                }
                return true;
            }))
        },
        {
            name: 'source',
            title: '信息来源',
            description: '例如‘原文发布于微信公众号’，若未知可以留空。',
            type: 'string',
        },

        {
            name: 'source_urls',
            title: '资料链接',
            description: '用于作证事件的资料链接和标题，若未知可以留空。',
            type: 'array',
            of: [
                {
                    title: '资料链接',
                    name: 'source_urlObject',
                    type: 'object',
                    fields: [
                        {
                            title: '链接',
                            description: '资料链接',
                            name: 'urlField',
                            type: 'url'
                        },
                        {
                            title: "资料标题",
                            description: "（日本刑事审判书）",
                            name: "url_title",
                            type: "string",
                        }
                    ]
                }
            ]
        },
        {
            name: 'image_urls',
            title: '图片链接',
            description: '用于作证事件的图片链接和标题，若未知可以留空。',
            type: 'array',
            of: [
                {
                    title: '图片链接',
                    name: 'image_urlObject',
                    type: 'object',
                    fields: [
                        {
                            title: '链接',
                            description: '图片链接',
                            name: 'urlField',
                            type: 'url'
                        },
                        {
                            title: "图片名称",
                            description: "（例如江歌刘鑫对话微信截图1）",
                            name: "url_title",
                            type: "string",
                        }
                    ]
                }
            ]
        },

        {
            name: 'type',
            title: '事件性质',
            description: '请选择下列五个种类之一',
            type: 'reference',
            to: { type: 'timeline_category' },
            validation: (Rule: Rule) => Rule.required().error("请选择一个事件性质"),
        },
        {
            name: 'tags',
            title: '标签',
            description: "事件标签，例如'当事人声明'，可随意填写1-2个标签，填写完按回车键确定",
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: "tags"
            }
        },

        {
            name: 'event',
            title: '事件内容',
            description: '为了阅读体验，请尽量不要超过140字',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'title',
            date: 'date',
            time: 'time',
        },
        prepare(select: any) {
            const { title, date, time } = select
            return {
                title: `${title}`,
                subtitle: `${date}-${time}`
            }
        }
    },
}
