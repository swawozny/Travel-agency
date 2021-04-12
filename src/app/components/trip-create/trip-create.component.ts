import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Trip } from '../trip';

import { TripService } from '../../services/trips.service';



@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent implements OnInit {
  submitted = false;
  trip: Trip = new Trip();

  modelForm!: FormGroup;
  @Output() createTrip: EventEmitter<string> = new EventEmitter();
  @Input()
  tripsLength!: number;
  name: FormControl = new FormControl;
  destination: FormControl = new FormControl;
  startDate: FormControl = new FormControl;
  endDate: FormControl = new FormControl;
  price: FormControl = new FormControl;
  stars: FormControl = new FormControl(0);
  maxPlaces: FormControl = new FormControl;
  description: FormControl = new FormControl;
  image: FormControl = new FormControl;

  constructor(private formBuilder : FormBuilder, private tripService: TripService) {}
  
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm(){
    this.modelForm = new FormGroup({
      name: this.name,
      destination: this.destination,
      startDate : this.startDate,
      endDate : this.endDate,
      stars : this.stars,
      price : this.price,
      freePlaces : this.maxPlaces,
      maxPlaces : this.maxPlaces,
      description : this.description,
      image: this.image,
    });
  }


  createFormControls() {
      this.name = new FormControl('', [
        Validators.minLength(1),
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
    ]),
      this.destination = new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      this.startDate = new FormControl('', Validators.required),
      this.endDate = new FormControl('', Validators.required),
      this.price = new FormControl('', [
        Validators.minLength(1),
        Validators.required,
        Validators.pattern('[1-9][0-9]*')
    ]),
      this.maxPlaces = new FormControl('', [
        Validators.minLength(1),
        Validators.required,
        Validators.pattern('[1-9][0-9]*')
    ]),
      this.description = new FormControl('', [
        Validators.minLength(4),
        Validators.required
    ]),
      this.image = new FormControl('', [
        Validators.minLength(8),
        Validators.required
    ])
  
  }

  newTrip(): void {
    this.submitted = false;
    this.trip = new Trip();
  }

  save() {
    this.tripService.createTrip(new Trip(this.modelForm.value));
    this.trip = new Trip();
  }

  onSubmit() {
    this.submitted = true;
    this.tripsLength++;
    this.save();
    this.modelForm.reset();
    this.ngOnInit();
  }
}
