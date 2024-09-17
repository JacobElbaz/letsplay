import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CommentDto } from './dto/comment.dto';

@ApiTags('comments')
@Controller('playgrounds/:playgroundId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async addComment(
    @Param('playgroundId') playgroundId: string,
    @Body() comment: CommentDto,
  ) {
    return this.commentsService.addComment(playgroundId, comment);
  }

  @Get()
  @ApiOkResponse({ type: CommentDto, isArray: true })
  async getComments(@Param('playgroundId') playgroundId: string) {
    return this.commentsService.getComments(playgroundId);
  }
}
