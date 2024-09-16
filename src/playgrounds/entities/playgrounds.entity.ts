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
}

export const PlaygroundSchema = SchemaFactory.createForClass(Playground);
