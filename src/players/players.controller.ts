import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    
    const siker=  await this.playersService.update(+id, updatePlayerDto);
    if(siker){
      return siker
    }
    else{
      throw new NotFoundException("Nincs ilyen id.");
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
     const siker= await this.playersService.remove(+id);
     if(siker){
      return siker;
     }else{
      throw new NotFoundException("Nincs ilyen id.")
     }
  }
}
