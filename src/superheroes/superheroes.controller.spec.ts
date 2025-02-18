import { Test, type TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  describe('findAll', () => {
    it('should return an array of superheroes sorted by humility score', () => {
      const result = [
        {
          id: 1,
          name: 'Super Humble',
          superpower: 'Humility',
          humilityScore: 10,
        },
        {
          id: 2,
          name: 'Captain Modesty',
          superpower: 'Modesty',
          humilityScore: 8,
        },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(controller.findAll()).toBe(result);
    });
  });
});
