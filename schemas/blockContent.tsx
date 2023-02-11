/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
// import React, {ReactNode} from 'react'
// import {Rule} from 'sanity'

const UnderlineIcon = () => {
  return <span style={{textDecoration: 'underline'}}>U</span>
}
const UnderlineRender = (props: any) => {
  return <span style={{textDecoration: 'underline'}}>{props.children}</span>
}

const ImageIcon = () => {
  return (
    <span>
      <svg style={{width: '1em', height: '1em'}} className="svg-icon" viewBox="0 0 20 20">
        <path
          fill="gray"
          d="M6.523,7.683c0.96,0,1.738-0.778,1.738-1.738c0-0.96-0.778-1.738-1.738-1.738c-0.96,0-1.738,0.778-1.738,1.738
								C4.785,6.904,5.563,7.683,6.523,7.683z M5.944,5.365h1.159v1.159H5.944V5.365z M18.113,0.729H1.888
								c-0.64,0-1.159,0.519-1.159,1.159v16.224c0,0.64,0.519,1.159,1.159,1.159h16.225c0.639,0,1.158-0.52,1.158-1.159V1.889
								C19.271,1.249,18.752,0.729,18.113,0.729z M18.113,17.532c0,0.321-0.262,0.58-0.58,0.58H2.467c-0.32,0-0.579-0.259-0.579-0.58
								V2.468c0-0.32,0.259-0.579,0.579-0.579h15.066c0.318,0,0.58,0.259,0.58,0.579V17.532z M15.91,7.85l-4.842,5.385l-3.502-2.488
								c-0.127-0.127-0.296-0.18-0.463-0.17c-0.167-0.009-0.336,0.043-0.463,0.17l-3.425,4.584c-0.237,0.236-0.237,0.619,0,0.856
								c0.236,0.236,0.62,0.236,0.856,0l3.152-4.22l3.491,2.481c0.123,0.123,0.284,0.179,0.446,0.174c0.16,0.005,0.32-0.051,0.443-0.174
								l5.162-5.743c0.238-0.236,0.238-0.619,0-0.856C16.529,7.614,16.146,7.614,15.91,7.85z"
        ></path>
      </svg>
    </span>
  )
}

const ImageRender = ({children}: any) => {
  return <span style={{textDecoration: 'underline', color: 'darkgreen'}}>{children}</span>
}

const VideoIcon = () => {
  return (
    <span>
      <svg style={{width: '1em', height: '1em'}} className="svg-icon" viewBox="0 0 20 20">
        <path
          fill="gray"
          d="M9.958,5.956c-2.577,0-4.667,2.089-4.667,4.667c0,2.577,2.089,4.667,4.667,4.667s4.667-2.09,4.667-4.667
								C14.625,8.045,12.535,5.956,9.958,5.956z M9.958,14.123c-1.933,0-3.5-1.568-3.5-3.5c0-1.933,1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5
								C13.458,12.555,11.891,14.123,9.958,14.123z M18.124,3.623h-2.916l-0.583-1.167c0,0-0.522-1.167-1.167-1.167h-7
								c-0.645,0-1.167,1.167-1.167,1.167L4.708,3.623H1.792c-0.645,0-1.167,0.522-1.167,1.167v12.832c0,0.645,0.522,1.168,1.167,1.168
								h16.333c0.645,0,1.167-0.523,1.167-1.168V4.789C19.291,4.145,18.769,3.623,18.124,3.623z M18.124,17.039
								c0,0.322-0.261,0.582-0.583,0.582H2.375c-0.323,0-0.583-0.26-0.583-0.582V5.373c0-0.323,0.261-0.583,0.583-0.583h2.954
								C5.316,4.74,5.292,4.695,5.292,4.643l0.933-1.458c0,0,0.418-0.729,0.934-0.729h5.6c0.516,0,0.934,0.729,0.934,0.729l0.934,1.458
								c0,0.052-0.024,0.097-0.038,0.146h2.954c0.322,0,0.583,0.261,0.583,0.583V17.039z"
        ></path>
      </svg>
    </span>
  )
}

const VideoRender = ({children}: any) => {
  return <span style={{textDecoration: 'underline', color: 'darkgoldenrod'}}>{children}</span>
}

const TableStyle = (props: any) => (
  <span style={{fontFamily: 'Garamond', color: 'darkorange'}}>{props.children} </span>
)

// interface AuxProps {
//   children: ReactNode
// }

// export class CiteRender extends React.Component<AuxProps> {
//   static count = 0
//   constructor(props: AuxProps) {
//     super(props)
//   }
//   render(): React.ReactNode {
//     CiteRender.count += 1
//     return (
//       <span style={{textDecoration: 'underline', color: '#darkorange'}}>{this.props.children}</span>
//     )
//   }
// }

const CiteRender = ({children}: any) => {
  return <span style={{textDecoration: 'underline', color: 'darkorange'}}>{children}</span>
}

const CiteIcon = () => {
  return (
    <span>
      <svg style={{width: '1em', height: '1em'}} className="svg-icon" viewBox="0 0 25 25">
        <path
          fill="gray"
          d="M0 23.938v-13.5s1.688-2.531 6.125-2.531c4.469 0 5.875 2.406 5.875 2.406s1.406-2.406 5.875-2.406c4.438 0 6.125 2.531 6.125 2.531v13.5s-2.969-2.188-6.188-2.188c-3.188 0-5.813 2.344-5.813 2.344s-2.625-2.344-5.813-2.344c-3.219 0-6.188 2.188-6.188 2.188zM2.031 10.969v9.813s1.281-0.969 4.344-0.969c3.031 0 4.625 1.813 4.625 1.813v-10.219s-2.156-1.563-4.875-1.563c-2.688 0-4.094 1.125-4.094 1.125zM13 11.406v10.219s1.5-1.813 4.625-1.813c3.094 0 4.344 0.969 4.344 0.969v-9.813s-1.406-1.125-4.094-1.125c-2.719 0-4.875 1.563-4.875 1.563z"
        ></path>
      </svg>
    </span>
  )
}

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
        {title: 'table', value: 'table', component: TableStyle},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Underline',
            value: 'u',
            icon: UnderlineIcon,
            component: UnderlineRender,
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            options: {
              modal: {
                type: 'fold', // 'popover' (default) | 'fullscreen' | 'fold'
                width: 'medium', // 'small' (default) | 'medium' | 'large' | 'full'
              },
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
          {
            title: 'ImageURL',
            name: 'imagelink',
            type: 'object',
            options: {
              modal: {
                type: 'fold',
                width: 'medium',
              },
            },
            icon: ImageIcon,
            component: ImageRender,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
          {
            title: 'VideoURL',
            name: 'videolink',
            type: 'object',
            options: {
              modal: {
                type: 'fold',
                width: 'medium',
              },
            },
            icon: VideoIcon,
            component: VideoRender,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
          // {
          //   title: 'Cite',
          //   name: 'Citelink',
          //   type: 'object',
          //   options: {
          //     modal: {
          //       type: 'fold',
          //       width: 'medium',
          //     },
          //   },
          //   icon: CiteIcon,
          //   component: CiteRender,
          //   fields: [
          //     {
          //       title: 'cite',
          //       name: 'citeref',
          //       type: 'string',
          //     },
          //   ],
          // },
          {
            title: 'Cite',
            name: 'Citelink',
            type: 'object',
            options: {
              modal: {
                type: 'fold',
                width: 'medium',
              },
            },
            icon: CiteIcon,
            component: CiteRender,
            fields: [
              {
                title: 'cite',
                name: 'reference',
                type: 'array',
                of: [
                  {
                    title: 'reference url',
                    name: 'reference_url',
                    type: 'object',
                    fields: [
                      {
                        title: 'title',
                        description: 'name of the article',
                        name: 'title',
                        type: 'string',
                      },
                      {
                        title: 'url',
                        description: 'url of the article',
                        name: 'urlField',
                        type: 'string',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'post'},
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
  ],
}
