import { BubbleMenu as FloatingMenu, Editor } from '@tiptap/react';

interface FloatingMenuComponentProps {
  editor: Editor | null;
}

export function FloatingMenuComponent ({ editor }: FloatingMenuComponentProps) {
  if (!editor) return null;

  return (
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
            onClick={() => editor.chain().focus().toggleTaskList().run()}
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
  )
}
