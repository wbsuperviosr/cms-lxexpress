import post from '../schemas/post'
import author from '../schemas/author'
import blockContent from './blockContent'
import casefiles from './casefiles'
import category from './category'
import media from './media'
import people from './people'
import subcategory from './subcategory'
import timeline from './timeline'
import rumor from './rumor'
import voice from './voice'
import about from './about'
// import timeline_type from "./timeline_type"

export const schemaTypes = [
  post,
  voice,
  author,
  blockContent,
  casefiles,
  category,
  subcategory,
  people,
  timeline,
  media,
  rumor,
  about,
]
