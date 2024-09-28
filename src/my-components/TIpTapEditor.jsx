import { useEffect, useState } from "react";
import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Heading from '@tiptap/extension-heading';
import Toolbar from './Toolbar';

const TipTapEditor = ({ cardData, handleCardDataChange }) => {
    
  const editor = useEditor({
    extensions: [StarterKit],
    content: cardData,
    onUpdate: ({ editor }) => {
      handleCardDataChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== cardData) {
      editor.commands.setContent(cardData);
    }
  }, [cardData, editor]);

  return (
    <div className="editor-container w-full h-full overflow-hidden ">
      <Toolbar editor={editor}/>
      <EditorContent editor={editor} className=" p-5 border-none focus:outline-none focus:border-transparent w-full h-full overflow-auto custom custom-scrollbar-1" />
    </div>
  );
};

export default TipTapEditor;
