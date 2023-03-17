import { TestBed } from '@angular/core/testing';

import { DashboardEditorService } from './dashboard-editor.service';

describe('DashboardEditorService', () => {
  let service: DashboardEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
