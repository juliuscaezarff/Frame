import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

import { lowlight } from 'lowlight'
import js from 'highlight.js/lib/languages/javascript'

import 'highlight.js/styles/atom-one-dark.css'
import '../styles.css'
import { FloatingMenuComponent } from './FloatingMenuComponent'
import { BubbleMenuComponent } from './BubbleMenuComponent'

lowlight.registerLanguage('js', js)

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight
      }),
      TaskList,
      TaskItem.configure({
        nested: true
      })
    ],
    content: `
    <h1>Getting Started</h1> <p>Olá 👋🏻, comece por aqui</p>`,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 leading-3 prose prose-invert prose-violet"
        editor={editor}
      />
      {editor && <FloatingMenuComponent editor={editor} />}

      {editor && <BubbleMenuComponent editor={editor} />}
    </>
  )
}
