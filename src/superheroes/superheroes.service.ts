import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superhero } from './interfaces/superhero.interface';

@Injectable()
export class SuperheroesService {
  private readonly superheroes: Superhero[] = [];

  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    const superhero: Superhero = {
      // basic ID generation using incrementing integer
      // not recommended for production - I would use a guuid instead, but for this small app it's fine
      id: this.superheroes.length + 1,
      ...createSuperheroDto,
    };
    this.superheroes.push(superhero);
    return superhero;
  }

  findAll(): Superhero[] {
    // sort by humility score in descending order
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
