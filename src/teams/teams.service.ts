import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamsService {
  [x: string]: any;
  constructor(private readonly db: PrismaService){}
  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team';
  }
  findAllPlayers(){
    return this.db.team.findMany({where: {player: {some: {}}}, include: {player: true}})
  }
  addPlayer(id: number, playerid: number){
    return this.db.team.update({where: {id}, data: {player: {connect: {id: playerid}}}, include: {player: true}});
  }

  findAll() {
    return this.db.team.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
