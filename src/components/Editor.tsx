import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight';
import js from 'highlight.js/lib/languages/javascript';
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble
} from 'react-icons/rx'

import 'highlight.js/styles/atom-one-dark.css'
import { BubbleButton } from './BubblleButton';

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
          <BubbleButton>
            Text
            <RxChevronDown className='w-4 h-4'/>
          </BubbleButton>
          <BubbleButton>
            Comment
            <RxChatBubble className='w-4 h-4'/>
          </BubbleButton>
         <div className='flex items-center'>
          <BubbleButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive('bold')}
          >
              <RxFontBold className='w-4 h-4'/>
            </BubbleButton>
            <BubbleButton>
              <RxFontItalic className='w-4 h-4'/>
            </BubbleButton>
            <BubbleButton>
              <RxStrikethrough className='w-4 h-4'/>
            </BubbleButton>
            <BubbleButton>
              <RxCode className='w-4 h-4'/>
          </BubbleButton>
         </div>
        </BubbleMenu>
      )}
    </>
  )
}
