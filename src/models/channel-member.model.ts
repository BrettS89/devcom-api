// communication/channel-member-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose, SchemaTypes } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'communication/channelMember';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    channelId: {
      type: Schema.Types.ObjectId,
      ref: 'communication/channel',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'security/user',
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
