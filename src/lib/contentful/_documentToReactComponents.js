import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { options } from './options';

export function _documentToReactComponents(body) {
  return documentToReactComponents(body, options);
}
