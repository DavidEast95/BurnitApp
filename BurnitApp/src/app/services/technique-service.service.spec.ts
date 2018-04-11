import { TestBed, inject } from '@angular/core/testing';

import { TechniqueServiceService } from './technique-service.service';

describe('RecipeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechniqueServiceService]
    });
  });

  it('should be created', inject([TechniqueServiceService], (service: TechniqueServiceService) => {
    expect(service).toBeTruthy();
  }));
});
