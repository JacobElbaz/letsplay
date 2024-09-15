import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('playgrounds')
export class PlaygroundsController {
    @Get()
    findALl() {
        return 'This action returns all playgrounds';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} playground`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `This action updates #${id} playground`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes #${id} playground`;
    }
}
