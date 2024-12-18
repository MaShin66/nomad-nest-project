import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({ title: 'Test Movie', year: 2024, genres: ['test'] });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
  });

  describe('deleteOne', () => {
    it('should delete a movie', () => {
      service.create({ title: 'Test Movie', year: 2024, genres: ['test'] });
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      service.create({ title: 'Test Movie', year: 2024, genres: ['test'] });
    });
  });
});
