import '../style/rich-editor.scss';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToRaw, ContentState, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { useEffect, useState } from 'react';

export default function RichEditor({
  value = '',
  initialValue = '',
  setFieldValue,
}) {
  const [editorState, setEditorState] = useState(
    value ? prepareDraft(value) : EditorState.createEmpty()
  );

  useEffect(() => {
    if (initialValue) {
      setEditorState(prepareDraft(initialValue));
      console.log(initialValue);
    }
  }, [initialValue]);

  const onEditorStateChange = (editorState) => {
    const forFormik = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setFieldValue(forFormik);
    setEditorState(editorState);
  };

  function prepareDraft(value) {
    const draft = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(draft.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  }

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      customBlockRenderFunc="testing"
    />
  );
}
