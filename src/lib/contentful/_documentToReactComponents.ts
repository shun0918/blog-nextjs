import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { ReactNode } from 'react';
import { options } from './options';

export function _documentToReactComponents(body: Document): ReactNode {
  return documentToReactComponents(body, options);
}
