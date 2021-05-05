import * as TYPES from '@contentful/rich-text-types';
import { Options, RenderNode, NodeRenderer } from '@contentful/rich-text-react-renderer';

const CodeBlock: React.FC = ({ children }) => (
  <div>
    <pre>{children}</pre>
  </div>
);
//記事はHeading3から始まるようにする。 5以降はContentful側で使用不可能にしている。
const H1: React.FC = ({ children }) => <h3>{children}</h3>;
const H2: React.FC = ({ children }) => <h4>{children}</h4>;
const H3: React.FC = ({ children }) => <h5>{children}</h5>;
const H4: React.FC = ({ children }) => <h6>{children}</h6>;
const H5: React.FC = ({ children }) => <p>{children}</p>;
const H6: React.FC = ({ children }) => <p>{children}</p>;

export const options: Options = {
  renderNode: {
    [TYPES.BLOCKS.HEADING_1]: (node: TYPES.Heading1, children: React.ReactNode) => (
      <H1>{children}</H1>
    ),
    [TYPES.BLOCKS.HEADING_2]: (node: TYPES.Heading2, children: React.ReactNode) => (
      <H2>{children}</H2>
    ),
    [TYPES.BLOCKS.HEADING_3]: (node: TYPES.Heading3, children: React.ReactNode) => (
      <H3>{children}</H3>
    ),
    [TYPES.BLOCKS.HEADING_4]: (node: TYPES.Heading4, children: React.ReactNode) => (
      <H4>{children}</H4>
    ),
    [TYPES.BLOCKS.HEADING_5]: (node: TYPES.Heading5, children: React.ReactNode) => (
      <H5>{children}</H5>
    ),
    [TYPES.BLOCKS.HEADING_6]: (node: TYPES.Heading6, children: React.ReactNode) => (
      <H6>{children}</H6>
    ),
    // コードブロックをdivで括る
    [TYPES.BLOCKS.PARAGRAPH]: (node: TYPES.Paragraph, children: React.ReactNode) => {
      if (
        node.content.length === 1 &&
        TYPES.helpers.isText(node.content[0]) &&
        node.content[0].marks.find((x) => x.type === 'code')
      ) {
        return <CodeBlock>{children}</CodeBlock>;
      }
      return <p>{children}</p>;
    },
    // TODO:: TYPES.Node部分の型を厳密にする方法を検討
    [TYPES.BLOCKS.EMBEDDED_ASSET]: (node: TYPES.Node, children: React.ReactNode) => {
      const src = 'https:' + node.data.target.fields.file.url;
      const height = node.data.target.fields.file.details.height;
      const width = node.data.target.fields.file.details.width;
      return <img src={src} width={width} height={height} />;
    },
  },
};
