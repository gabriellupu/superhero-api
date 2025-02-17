import { Body, Controller, Get, Post } from '@nestjs/common';
import { Superhero } from './interfaces/superhero.interface';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
    return this.superheroesService.create(createSuperheroDto);
  }

  @Get()
  findAll(): Superhero[] {
    return this.superheroesService.findAll();
  }
}
