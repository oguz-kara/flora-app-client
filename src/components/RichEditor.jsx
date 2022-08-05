import '../style/rich-editor.scss';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function RichEditor() {
  return (
    <Editor
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      customBlockRenderFunc="testing"
    />
  );
}
