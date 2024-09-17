import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Playground extends Document {
  @Prop()
  name: string;

  @Prop()
  location: string;

  @Prop()
  numberOfPlayers: number;

  @Prop([String])
  players: string[];

  @Prop()
  playgroundType: string;

  @Prop()
  createdBy: string;

  @Prop()
  date: string;

  @Prop()
  startTime: string;

  @Prop()
  duration: number;

  @Prop([{ text: String, createdBy: String, createdAt: Date }])
  comments: [{ text: string; createdBy: string; createdAt: Date }];
}

export const PlaygroundSchema = SchemaFactory.createForClass(Playground);
