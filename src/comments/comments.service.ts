import { Injectable, NotFoundException } from '@nestjs/common';
import { PlaygroundsService } from '../playgrounds/playgrounds.service';

@Injectable()
export class CommentsService {
  constructor(private readonly playgroundsService: PlaygroundsService) {}

  async addComment(
    playgroundId: string,
    comment: { text: string; createdBy: string },
  ): Promise<any> {
    const playground = await this.playgroundsService.findOne(playgroundId);
    if (!playground) {
      throw new NotFoundException('Playground not found');
    }

    playground.comments.push({
      ...comment,
      createdAt: new Date(),
    });

    return this.playgroundsService.update(playgroundId, playground);
  }

  async getComments(
    playgroundId: string,
  ): Promise<{ text: string; createdBy: string; createdAt: Date }[]> {
    const playground = await this.playgroundsService.findOne(playgroundId);
    if (!playground) {
      throw new NotFoundException('Playground not found');
    }
    return playground.comments;
  }
}
