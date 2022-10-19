import { EditorController } from '../../types'

const editorController: EditorController = {
  testAnswer: (req, res, next) => {
    //1. write submitted code to a new file using fs.writeFileSync,
    //making sure to title it <algoName>.test.js
    //2. use a .sh script to run a jest test within 
    next();
  },
};

export default editorController; 