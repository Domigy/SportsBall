import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }
  @Get('players')
  findAllPlayers(){
    return this.teamsService.findAllPlayers();
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }
  @Post(':id/addPlayer/:playerid')
  addPlayer(@Param('id') id: string, @Param('playerid') playerid: string){
    return this.teamsService.addPlayer(+id, +playerid);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const siker = await this.teamsService.remove(+id);
    if(siker){
      return siker
    }else{
      return new NotFoundException("Nincs ilyen id.")
    }
  }
  

}
