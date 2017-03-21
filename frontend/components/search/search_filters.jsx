import React from 'react';
import FilterDropdown from './filters/filter_dropdown';
import SliderGroupContainer from './filters/slider_group_container';
import FilterDropdownContainer from './filters/filter_dropdown_container';

function SearchFilters(props) {
  return(
    <form className="filters-form">
      <span className="filters-header"><p className="filters-title">{props.cars.length} matches</p> <div onClick={props.clearFilters}className="filters-clear">Clear Filters</div></span>
      <FilterScrollView/>
      <button onClick={e => {e.preventDefault(); props.search();}} className="filters-button">Find Cars</button>
    </form>
  );
}

function FilterScrollView(props) {
  //TODO: possibly make filter options dynamically determined
  let bodyOptions = ["Convertible", "Coupe", "Hatchback", "SUV", "Sedan", "Truck", "Van", "Wagon"];
  let makeOptions = ["Acura", "Audi", "BMW", "Cadillac", "Chevorlet", "Chrysler", "Dodge", "FIAT", "Ford", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Land Rover", "Lexus", "Lincoln", "MINI", "Mazda", "Mercedes-Benz", "Mitsubishi", "Nissan", "Porsche", "Subaru", "Tesla", "Toyota", "Volkswagon", "Volvo"];
  let transmissionOptions = ["Automatic", "CVT", "Manual"];
  let drivetrainOptions = ["AWD", "4WD", "FWD", "RWD"];
  return(
    <div className="filters-scroll">
      <SliderGroupContainer label="Max Price" unit="$" max="80"/>
      <SliderGroupContainer label="Max Mileage" max="80"/>
      <div className="filters">
        <FilterDropdownContainer title="Body Style" options={bodyOptions}/>
        <FilterDropdownContainer title="Make" options={makeOptions}/>
        <FilterDropdownContainer title="Transmission" options={transmissionOptions}/>
        <FilterDropdownContainer title="Drivetrain" options={drivetrainOptions}/>
      </div>
    </div>
  );
}

export default SearchFilters;