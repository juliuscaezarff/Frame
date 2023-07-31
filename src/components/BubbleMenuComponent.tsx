import { BubbleMenu, Editor } from '@tiptap/react'

import { BubbleButton } from './BubblleButton'

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble
} from 'react-icons/rx'

interface BubbleMenuComponentProps {
  editor: Editor | null
}
export function BubbleMenuComponent({ editor }: BubbleMenuComponentProps) {
  if (!editor) return null

  return (
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
        <BubbleButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          data-active={editor.isActive('strike')}
        >
          <RxStrikethrough className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton>
          <RxCode className="w-4 h-4" />
        </BubbleButton>
      </div>
    </BubbleMenu>
  )
}
