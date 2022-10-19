// import { useEffect, useState, useCallback } from 'react';
// // import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
// import * as React from 'react';
// import { javascript } from '@codemirror/lang-javascript';

// const [element, setElement] = useState<HTMLElement>();

// const ref = useCallback((node: HTMLElement | null) => {
//   if (!node) return;

//   setElement(node);
// }, []);

// export default function useCodeMirror() {
//   const [element, setElement] = useState<HTMLElement>();

//   const ref = useCallback((node: HTMLElement | null) => {
//     if (!node) return;

//     setElement(node);
//   }, []);

//   useEffect(() => {
//     if (!element) return;

//     const view = new EditorView({
//       state: EditorState.create({
//         extensions: [basicSetup, javascript()],
//       }),
//       parent: element,
//     });

//     return () => view?.destroy();
//   }, [element]);

//   return { ref };
// }
