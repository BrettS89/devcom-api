// project/sprint-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'project/sprint';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    accountId: {
      type: Schema.Types.ObjectId,
      ref: 'security/account',
      required: true,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'project/project',
    },
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    startAt: {
      type: String,
    },
    endAt: {
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
