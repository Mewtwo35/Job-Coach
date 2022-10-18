import { EditorController } from '../../types'

const editorController: EditorController = {
  testAnswer: (req, res, next) => {
    console.log('TEST ANSWER FUNC');
    next();
  },
};

export default editorController; 