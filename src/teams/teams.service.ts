import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TeamsService {
  [x: string]: any;
  constructor(private readonly db: PrismaService){}
  create(createTeamDto: CreateTeamDto) {
    return this.db.team.create({data: createTeamDto});
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
    return this.db.team.findUnique({where: {id}});
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  async remove(id: number) {
    try{
      return await this.db.team.delete({where: {id}});
    }catch{
      return undefined;
    }
    
  }
}
