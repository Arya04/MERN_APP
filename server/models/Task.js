import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  description: { type: 'String', required: true },
  cuid: {type: 'String', required: true},
  isDone: {type: 'Boolean', required: true}
});

export default mongoose.model('Task', taskSchema);
