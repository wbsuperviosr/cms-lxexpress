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
import React from "react"
// import { PhoneIcon } from '@heroicons/react/24/solid'


const UnderlineIcon = () => {
	return <span style={{ textDecoration: 'underline' }}>U</span>
}
const UnderlineRender = (props) => {
	return <span style={{ textDecoration: 'underline' }}>{props.children}</span>
}


const ImageIcon = () => {
	return <span >
		<svg style={{ width: '1em', height: '1em' }} className="svg-icon" viewBox="0 0 20 20">
			<path fill="#4691f6" d="M9.969,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.375,4.805,15.164,0.594,9.969,0.594 M9.969,18.552c-4.723,0-8.551-3.829-8.551-8.552s3.829-8.551,8.551-8.551S18.521,5.277,18.521,10S14.691,18.552,9.969,18.552 M12.534,5.724H7.403c-0.944,0-1.71,0.766-1.71,1.71v5.131c0,0.944,0.766,1.71,1.71,1.71h5.131c0.944,0,1.71-0.766,1.71-1.71V7.435C14.244,6.49,13.479,5.724,12.534,5.724M11.679,7.007h1.283V8.29h-1.283V7.007z M9.969,8.29c0.944,0,1.71,0.766,1.71,1.71s-0.766,1.71-1.71,1.71s-1.71-0.766-1.71-1.71S9.024,8.29,9.969,8.29 M13.39,12.565c0,0.472-0.384,0.854-0.855,0.854H7.403c-0.472,0-0.855-0.383-0.855-0.854V9.573h0.898C7.423,9.712,7.403,9.854,7.403,10c0,1.417,1.149,2.565,2.565,2.565c1.416,0,2.565-1.148,2.565-2.565c0-0.146-0.02-0.288-0.043-0.427h0.898V12.565z"></path>
		</svg>

	</span>
}

const ImageRender = ({ children }) => {

	return <span style={{ textDecoration: "underline", color: "darkgreen" }}>
		{children}
	</span>
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
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'H5', value: 'h5' },
				{ title: 'H6', value: 'h6' },
				{ title: 'Quote', value: 'blockquote' }
			],
			lists: [{ title: 'Bullet', value: 'bullet' },
			{ title: 'Number', value: 'number' }
			],
			// Marks let you mark up inline text in the block editor.
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting by editors.
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{
						title: "Underline", value: 'u',
						blockEditor: {
							icon: UnderlineIcon,
							render: UnderlineRender
						}
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
								width: 'medium',  // 'small' (default) | 'medium' | 'large' | 'full'
							}
						},
						fields: [
							{
								title: 'URL',
								name: 'href',
								type: 'url',
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
							}
						},
						blockEditor: {
							icon: ImageIcon,
							render: ImageRender,
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
						name: 'internalLink',
						type: 'object',
						title: 'Internal link',
						fields: [
							{
								name: 'reference',
								type: 'reference',
								title: 'Reference',
								to: [
									{ type: 'post' },
									// other types you may want to link to
								]
							}
						]
					},
				],
			},
		},
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.

	],
}
