import { Test, TestingModule } from '@nestjs/testing';
import { PlaygroundsController } from './playgrounds.controller';

describe('PlaygroundsController', () => {
  let controller: PlaygroundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaygroundsController],
    }).compile();

    controller = module.get<PlaygroundsController>(PlaygroundsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
