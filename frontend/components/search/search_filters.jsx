import React from 'react';
import FilterDropdown from './filters/filter_dropdown';
import SliderGroupContainer from './filters/slider_group_container';

function SearchFilters(props) {
  return(
    <form className="filters-form">
      <p className="filters-title">113 matches</p>
      <FilterScrollView/>
      <button className="filters-button">Find Cars</button>
    </form>
  );
}

function FilterScrollView(props) {
  //TODO: possibly make filter options dynamically determined
  let bodyOptions = ["Convertible", "Coupe", "Hatchback", "SUV", "Sedan", "Truck", "Van", "Wagon"];
  let makeOptions = ["Acura", "Audi", "BMW", "Cadillac", "Chevorlet", "Chrysler", "Dodge", "FIAT", "Ford", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jaguar", "Jeep", "Kia", "Land Rover", "Lexus", "Lexus", "Lincoln", "MINI", "Mazda", "Mercedes-Benz", "Mitsubishi", "Nissan", "Porsche", "Subaru", "Tesla", "Toyota", "Volkswagon", "Volvo"];
  let transmissionOptions = ["Automatic", "CVT", "Manual"];
  let drivetrainOptions = ["AWD", "4WD", "FWD", "RWD"];
  return(
    <div className="filters-scroll">
      <SliderGroupContainer label="Max Price" unit="$" max="80"/>
      <SliderGroupContainer label="Max Mileage" max="80"/>
      <div className="filters">
        <FilterDropdown title="Body Style" options={bodyOptions}/>
        <FilterDropdown title="Make" options={makeOptions}/>
        <FilterDropdown title="Transmission" options={transmissionOptions}/>
        <FilterDropdown title="Drivetrain" options={makeOptions}/>
      </div>
    </div>
  );
}

export default SearchFilters;