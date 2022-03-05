import { useEffect, useState } from 'react';
import Draft, {EditorState, ContentState, RichUtils, Modifier, KeyBindingUtil, ContentBlock } from 'draft-js';
import Editor, { EditorPlugin, composeDecorators } from '@draft-js-plugins/editor';
import 'draft-js/dist/Draft.css'
import Immutable from 'immutable';
import { Typography } from '@mui/material';
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import createFocusPlugin from '@draft-js-plugins/focus';

function CustomH2(props: any) {
  return <Typography>{props.children}</Typography>
}

const blockRenderMap = Immutable.Map({
  'header-two': {
    element: 'h2',
    wrapper: <CustomH2 />,
  },
});

const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);

// View .createEntity
function entityInlineCodeBlockStrategy(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'CODE';
  }, callback);
}

const whitespaceRegEx = /\s/;

function checkForWhiteSpaceBeforeTrigger(text: string, index: number): boolean {
  if (index === 0) {
    return true;
  }
  return whitespaceRegEx.test(text[index - 1]);
}

function findInContentBlockWithWhitespace(
  regex: RegExp,
  text: string,
  nonEntityStart: number,
  callback: any,
): void {
  let matchArr;
  let start;
  let prevLastIndex = regex.lastIndex;

  // Go through all matches in the text and return the indices to the callback
  // Break the loop if lastIndex is not changed
  while ((matchArr = regex.exec(text)) !== null) {
    if (regex.lastIndex === prevLastIndex) {
      break;
    }
    prevLastIndex = regex.lastIndex;
    start = nonEntityStart + matchArr.index;
    const end = start + matchArr[0].length;

    //check if whitespace support is active that the char before the trigger is a white space #1844
    if (checkForWhiteSpaceBeforeTrigger(text, matchArr.index)) {
      callback(start, end);
    }
  }
}

function inlineCodeBlockTrigger(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState?: ContentState) {
  const text = contentBlock.getText();
  const backsticks = text.matchAll(/`/g);
  
  let startMatch = backsticks.next();
  let endMatch = backsticks.next();
  while (!startMatch.done && !endMatch.done) {
    callback(startMatch.value.index as number, endMatch.value.index as number + 1);
    startMatch = endMatch;
    endMatch = backsticks.next();
  }
}

function createEntity(contentBlock: ContentBlock, editorState: EditorState, setEditorState: any, start: number, end: number) {
  const contentStateWithEntity = editorState
    .getCurrentContent()
    .createEntity('CODE', 'MUTABLE', { abc: 'def' });
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  const selection = editorState.getSelection();
  const code = selection.merge({ anchorOffset: start, focusOffset: end })

  const modified = Modifier.replaceText(
    editorState.getCurrentContent(),
    code,
    contentBlock.getText().slice(start+1, end-1),
    editorState.getCurrentInlineStyle(),
    entityKey,
  );
  const nextEditorState = EditorState.push(
    editorState,
    modified,
    'insert-fragment'
  );
  setEditorState(nextEditorState);
}

const CodeSpan = (props: any) => {
  console.log(props);
  useEffect(() => {
    const editorState = props.getEditorState();
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(anchorKey);
    inlineCodeBlockTrigger(currentBlock, (start, end) => createEntity(currentBlock, editorState, props.setEditorState, start, end));
  }, []);

  return (
    <span {...props} style={{ backgroundColor: 'gray' }}>
      {props.children}
    </span>
  );
};

const createCodeBlockPlugin = (config?: any): EditorPlugin => {
  return {
      decorators: [
        {
          strategy: entityInlineCodeBlockStrategy,
          component: CodeSpan,
        },
        {
          strategy: inlineCodeBlockTrigger,
          component: CodeSpan,
        },
    ],
  }
}

function CustomTypography(props: any) {
  return <p>abc</p>
}

const createBlockDragAndDropPlugin = (config?: any): EditorPlugin => {
  let Block = CustomTypography
  if (config.decorator) {
    Block = config.decorator(CustomTypography);
  }

  return {
    blockRendererFn: (block, { getEditorState }) => {

      if (block.getType() === 'drag') {
        const contentState = getEditorState().getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) return null;
        const type = contentState.getEntity(entity).getType();
        if (type === 'drag' || type === 'drag') {
          return {
            component: Block,
            editable: false,
          };
        }
        return null;
      }

      return null;
    },
  };
}


const initialState = {
  entityMap: {},
  blocks: [
    {
      key: '9gm3s',
      text:
        'You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '5sh2s',
      text:
        'Lorem `ipsum dolor sit amet, consectetur adipiscing elit.` In non metus quis odio mattis elementum vel maximus elit. Morbi dignissim ex sapien, convallis aliquet magna rhoncus sed',
      type: 'drag',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
}

const dragAndDropPlugin = createBlockDndPlugin();
const focusPlugin = createFocusPlugin();

const decorator = composeDecorators(
  dragAndDropPlugin.decorator,
  focusPlugin.decorator
);

function blockRendererFn(contentBlock: Draft.ContentBlock) {
  const type = contentBlock.getType();
  if (type === 'h2') {
    return {
      component: CustomH2,
      editable: false,
      props: {
        foo: 'bar',
      },
    };
  }
}

const compositeDecorator = new Draft.CompositeDecorator([
  // {
  //   strategy: entityInlineCodeBlockStrategy,
  //   component: CodeSpan,
  // },
]);

export default function DraftjsPage() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(
        Draft.convertFromRaw(initialState),
        compositeDecorator,  
      ),
  );

  
  const keyBindingsFn = (e: React.KeyboardEvent): string | null => {
    if (e.key === 'h' && KeyBindingUtil.isCtrlKeyCommand(e)) {
      return 'to-h2';
    } else if (e.key === 'q' && KeyBindingUtil.isCtrlKeyCommand(e)) {
      return 'create-entity';
    }

    return Draft.getDefaultKeyBinding(e);
  }

  const handleKeyCommand = (command: string, editorState: Draft.EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    console.log('Custom command: ' + command);
    if (command === 'to-h2') {
      const currentContent = editorState.getCurrentContent();
      const selection =  editorState.getSelection();
      const modified = Modifier.setBlockType(currentContent, selection, 'header-two');

      const nextEditorState = EditorState.push(
        editorState,
        modified,
        'change-block-type'
      );
      setEditorState(nextEditorState);
      return 'handled';
    } else if (command === 'create-entity') {
      const contentStateWithEntity = editorState
        .getCurrentContent()
        .createEntity('drag', 'MUTABLE', { abc: 'def' });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

      const modified = Modifier.replaceText(
        contentStateWithEntity,
        editorState.getSelection(),
        'teste',
        editorState.getCurrentInlineStyle(),
        entityKey,
      );
      const nextEditorState = EditorState.push(
        editorState,
        modified,
        'insert-fragment'
      );
      setEditorState(nextEditorState);
      return 'handled';
    }

    return 'not-handled';
  }

  return <Editor
    editorState={editorState}
    // blockRenderMap={extendedBlockRenderMap}
    blockRendererFn={blockRendererFn}
    // decorators=
    handleKeyCommand={handleKeyCommand}
    keyBindingFn={keyBindingsFn}
    onChange={setEditorState}
    plugins={[createCodeBlockPlugin() as any, createBlockDragAndDropPlugin({ decorator: decorator })]}
  />;
}
