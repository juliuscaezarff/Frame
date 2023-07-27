import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'

import { lowlight } from 'lowlight'
import js from 'highlight.js/lib/languages/javascript'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble
} from 'react-icons/rx'

import 'highlight.js/styles/atom-one-dark.css'
import { BubbleButton } from './BubblleButton'
import '../styles.css'

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
        nested: true,
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
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          className="bg-zinc-700 py-2 px-1 shadow-xl gap-1 border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col"
          shouldShow={({ state }) => {
            const { $from } = state.selection

            const currentLineText = $from.nodeBefore?.textContent

            return currentLineText === '/'
          }}
        >
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              alt="text"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-400">
                Big section heading.
              </span>
            </div>
          </button>

          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            <img
              src="http://www.notion.so/images/blocks/subheader.9aab4769.png"
              alt="text"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 2</span>
              <span className="text-xs text-zinc-400">
                Medium section heading.
              </span>
            </div>
          </button>

          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            onClick={() =>
              editor.chain().focus().toggleTaskList().run()
            }
            data-active={editor.isActive('taskList')}
          >
            <img
              src="http://www.notion.so/images/blocks/to-do.f8d20542.png"
              alt="text"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Task List</span>
              <span className="text-xs text-zinc-400">
                Acompanhar Tarefas com uma Lista de
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            Comment
            <RxChatBubble className="w-4 h-4" />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  )
}
