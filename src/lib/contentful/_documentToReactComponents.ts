import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {Document} from '@contentful/rich-text-types'
import { options } from './options';

export function _documentToReactComponents(body: Document) {
  return documentToReactComponents(body, options);
}
