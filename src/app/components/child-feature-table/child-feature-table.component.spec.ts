import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFeatureTableComponent } from './child-feature-table.component';

describe('ChildFeatureTableComponent', () => {
  let component: ChildFeatureTableComponent;
  let fixture: ComponentFixture<ChildFeatureTableComponent>;
  const mockTableColumns = [
    'Name',
    'Age',
    'Country'
  ];
  const mockTableData = [
    {
      name:'Miranha',
      age: 14,
      country: 'Osasco'
    },
    {
      name:'Peter Parker',
      age: 14,
      country: 'United States'
    },
    {
      name:'Spider-Man',
      age: 14,
      country: 'United States'
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table data', () => {
    
    component.columns = mockTableColumns;
    component.people = mockTableData;

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.people).toEqual(mockTableData);
    const column = fixture.nativeElement.querySelectorAll('th');
    const dataRow = fixture.nativeElement.querySelectorAll('tr');
    expect(dataRow.length).toBe(4);
    
    expect(column[0].innerHTML).toBe('Name');
    expect(column[1].innerHTML).toBe('Age');
    expect(column[2].innerHTML).toBe('Country');

    const row1 = dataRow[1];
    expect(row1.cells[0].innerHTML).toBe('Miranha');
    expect(row1.cells[1].innerHTML).toBe('14');
    expect(row1.cells[2].innerHTML).toBe('Osasco');

    const row2 = dataRow[2];
    expect(row2.cells[0].innerHTML).toBe('Peter Parker');
    expect(row2.cells[1].innerHTML).toBe('14');
    expect(row2.cells[2].innerHTML).toBe('United States');

    const row3 = dataRow[3];
    expect(row3.cells[0].innerHTML).toBe('Spider-Man');
    expect(row3.cells[1].innerHTML).toBe('14');
    expect(row3.cells[2].innerHTML).toBe('United States');
  });
});
