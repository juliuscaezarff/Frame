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
        <BubbleMenu 
          className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600' 
          editor={editor}
        >
          <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 '>
            bold
          </button>
          <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600'>
            bold
          </button>
          <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600'>
            bold
          </button>
          <button className='p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600'>
            bold
          </button>
        </BubbleMenu>
      )}
    </>
  )
}
