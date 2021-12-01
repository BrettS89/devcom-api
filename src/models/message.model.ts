// communication/message-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'communication/message';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    accountId: {
      type: Schema.Types.ObjectId,
      ref: 'security/account',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'security/user',
    },
    ticketId: {
      type: Schema.Types.ObjectId,
      ref: 'project/ticket',
    },
    channelId: {
      type: Schema.Types.ObjectId,
      ref: 'communication/channel',
    },
    dmId: {
      type: Schema.Types.ObjectId,
      ref: 'communication/dm',
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
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
