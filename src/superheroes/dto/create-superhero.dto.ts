import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  readonly humilityScore: number;
}
