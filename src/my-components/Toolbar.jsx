import React from 'react';

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const style_active = "is-active text-yellow-400";
  const style_normal = "text-gray-600";

  return (
    <div className="toolbar space-x-5 pl-5">
      


      <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? style_active : style_normal}>
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? style_active : style_normal}>
        Italic
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? style_active : style_normal}>
        H1
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? style_active : style_normal}>
        H2
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? style_active : style_normal}>
        H3
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? style_active : style_normal}>
        Bullet List
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? style_active : style_normal}>
        Ordered List
      </button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? style_active : style_normal}>
        Blockquote
      </button>
      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? style_active : style_normal}>
        Code Block
      </button>
      <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? style_active : style_normal}>
        Paragraph
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className={style_normal}>
        Horizontal Rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()  } className={style_normal}>
        Hard Break
      </button>
    </div>
  );
  
};

export default Toolbar;
