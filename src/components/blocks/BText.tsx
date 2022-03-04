import React, { createRef, forwardRef, useRef } from 'react';
import { Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import ContentEditable from 'react-contenteditable';
import markdown from 'markdown-it';
import { PinDropSharp } from '@mui/icons-material';
const md = markdown();

interface BTextProps {
  text: string,
  margin?: string,
  align?: 'right' | 'left' | 'inherit' | 'center' | 'justify',
}

const BText = (props: BTextProps): JSX.Element => {
  // return <Typography component={Editable} align={props.align} sx={{ margin: props.margin }}>{props.text}</Typography>
  // 
  // const ref = createRef<HTMLParagraphElement>();
  
  // setTimeout(() => console.log(ref.current?.textContent), 2000);
  // // md.renderInline(alsdfkjs)

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    console.log(event);
    console.log(event.key);
  };

  return (
    <ContentEditable
      // innerRef={ref}
      html={props.text} // innerHTML of the editable div
      disabled={false}       // use true to disable editing
      onChange={() => {}}
      onKeyDown={handleKeyDown}
      tagName='p' // Use a custom HTML tag (uses a div by default)
    />
  );
}

const Editable = (props: any) => {
  console.log(props.children);
  const visual = md.renderInline(props.children);

  const handleInput = (event: any) => {
    console.log(event.target.textContent);
  }

  return <p
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={handleInput}
      dangerouslySetInnerHTML={{ __html: visual }}
    />
}

export default BText;