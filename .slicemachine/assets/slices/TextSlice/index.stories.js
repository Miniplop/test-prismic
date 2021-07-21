import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Enim ullamco incididunt veniam fugiat cillum exercitation magna deserunt excepteur ad laborum dolore laborum proident. Dolor non proident est mollit cillum dolore excepteur enim deserunt ullamco. Mollit nulla mollit irure labore in dolore aliquip deserunt.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Esse cillum qui veniam adipisicing cupidatat adipisicing est ea occaecat ullamco minim. Consectetur labore commodo esse eiusmod ullamco adipisicing duis.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
