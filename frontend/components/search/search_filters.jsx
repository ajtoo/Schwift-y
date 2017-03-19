import React from 'react';

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
  return(
    <div className="filters-scroll">
      <SliderGroup label="Max Price" unit="$" max="80"/>
      <SliderGroup label="Max Mileage" max="80"/>
      <label className="filter-label">Body Style</label>
      <label className="filter-label">Make</label>
      <label className="filter-label">Transmission</label>
      <label className="filter-label">Drivetrain</label>
You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.

Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.

Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.

Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.

The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.

Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. 

Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.

The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.

    </div>
  );
}

class SliderGroup extends React.Component {
  /*
    NOTE: the max in props is the actual max, 
    there is a +1 to the slider's max as a "greater than"
    indicator (so you can search cars above the "max" of the slider)
    which allows you to uncap your search in terms of price
  */
  constructor(props) {
    super(props);
    this.state = {
      value: 81
    };
  }
  updateValue(e) {
    this.setState({value: e.target.value});
  }
  render(){
    return(
      <fieldset className="slider-group">
        <label className="slider-label">{this.props.label}</label>
        <label className="value-label">
          {this.props.unit}{this.state.value > this.props.max ? 80 : this.state.value}k{this.state.value > this.props.max ? "+" : ""}
        </label>
        <input className="slider-group-range"
                type="range" 
                min="5" 
                max={Number(this.props.max)+1} 
                step="1" 
                onChange={this.updateValue.bind(this)} 
                value={this.state.value}/>
      </fieldset>
    );
  }
}

export default SearchFilters;