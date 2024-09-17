import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('playgrounds/:playgroundId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async addComment(
    @Param('playgroundId') playgroundId: string,
    @Body() comment: { text: string; createdBy: string },
  ) {
    return this.commentsService.addComment(playgroundId, comment);
  }

  @Get()
  async getComments(@Param('playgroundId') playgroundId: string) {
    return this.commentsService.getComments(playgroundId);
  }
}
