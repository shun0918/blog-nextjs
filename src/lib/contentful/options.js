import { BLOCKS, MARKS } from '@contentful/rich-text-types';
const CodeBlock = ({ children }) => (
  <div>
    <pre>{children}</pre>
  </div>
);
const H1 = ({ children }) => <h3>{children}</h3>;
const H2 = ({ children }) => <h4>{children}</h4>;
const H3 = ({ children }) => <h5>{children}</h5>;
const H4 = ({ children }) => <h6>{children}</h6>;
const H5 = ({ children }) => <p>{children}</p>;
const H6 = ({ children }) => <p>{children}</p>;

export const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
    [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
    [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
    // コードブロックをdivで括る
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content.length === 1 && node.content[0].marks.find((x) => x.type === 'code')) {
        return <CodeBlock>{children}</CodeBlock>;
      }
      return <p>{children}</p>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const src = 'https:' + node.data.target.fields.file.url;
      const height = node.data.target.fields.file.details.height;
      const width = node.data.target.fields.file.details.width;
      return <img src={src} width={width} height={height} />;
    },
  },
};
