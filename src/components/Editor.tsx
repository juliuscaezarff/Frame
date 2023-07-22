import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight';
import js from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/atom-one-dark.css'

lowlight.registerLanguage('js', js)

export default function Editor() {
    const editor = useEditor({
        extensions: [
          StarterKit,
          CodeBlockLowlight.configure({
            lowlight,
          }),    
        ],
        content: '<p>Hello World!</p>',
        editorProps: {
         attributes: {
            class: 'outline-none',
          }
        }
      })    

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor} 
      />
      { editor && (
        <BubbleMenu editor={editor}>
          <button>bold</button>
        </BubbleMenu>
      )}
    </>
  )
}
