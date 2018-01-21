import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: 'String', required: true },
  description: { type: 'String', required: true },
  cuid: {type: 'String', required: true}
});

export default mongoose.model('Task', taskSchema);
