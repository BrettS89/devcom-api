// project/ticket-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.htmlss
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'project/ticket';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    accountId: {
      type: Schema.Types.ObjectId,
      ref: 'security/account',
      required: true,
      index: true,
    },
    assignerUserId: {
      type: Schema.Types.ObjectId,
      ref: 'security/user',
      required: true,
    },
    assigneeUserId: {
      type: Schema.Types.ObjectId,
      ref: 'security/user',
    },
    testerUserId: {
      type: Schema.Types.ObjectId,
      ref: 'security/user',
    },
    statusId: {
      type: Schema.Types.ObjectId,
      ref: 'project/workflow',
      required: true,
    },
    sprintId: {
      type: Schema.Types.ObjectId,
      ref: 'project/sprint',
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'project/project',
    },
    typeId: {
      type: Schema.Types.ObjectId,
      ref: 'project/ticket-type',
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
