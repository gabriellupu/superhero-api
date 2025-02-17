import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superhero } from './interfaces/superhero.interface';

@Injectable()
export class SuperheroesService {
  private readonly superheroes: Superhero[] = [];

  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    const superhero: Superhero = {
      id: this.superheroes.length + 1,
      ...createSuperheroDto,
    };
    this.superheroes.push(superhero);
    return superhero;
  }

  findAll(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
