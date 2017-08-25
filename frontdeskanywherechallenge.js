//holly white • Front Desk Anywhere Code Test

//overall function
    var payPeriods = JSON.parse("Desktop/Freelance/jsonex1.json"); 
    var result = payPeriods.map(function(item) {
    return item;
    });
    console.log(result);

  function makePayPeriods(array){
      /*The first specific function (`makePayPeriods(array)`) will map the JSON input (an array it seems, you may want to specify if we can always expect an array) to an array of what I'll call "pay periods".  You need to look at the rates in each object in that array, and whenever you see a rate change, you start a new pay period, and end the current one.  Compare the first example array to the second example array, that is how I figured out what he actually wants.*/
 
    
  }
  function addColor(array){
  /*The second specific function (`addColor(array)`) will run through that array returned by #2, and map to a new array with a new property: the number rate converted to a hex color.  I would ask for clarification on that "unique" part because there are 16,777,216 options for colors (16^6).  Can we be sure that the format of the number will be "money" format?  I.e. will it be ###.## or ####.##?  If that's the case, this is pretty straightforward.  You can toss out the decimal point (133.55 becomes 13355) and then convert that number to hex.*/
  }
  //convert and return json string here
  
[
  {
    "date": "2018-01-01",
    "rate": "199.99"
  },
  {
    "date": "2018-01-02",
    "rate": "199.99"
  },
  {
    "date": "2018-01-03",
    "rate": "199.99"
  },
  {
    "date": "2018-01-04",
    "rate": "199.99"
  },
  {
    "date": "2018-01-05",
    "rate": "199.99"
  },
  {
    "date": "2018-01-06",
    "rate": "115.49"
  },
  {
    "date": "2018-01-07",
    "rate": "115.49"
  },
  {
    "date": "2018-01-08",
    "rate": "115.49"
  },
  {
    "date": "2018-01-09",
    "rate": "115.49"
  },
  {
    "date": "2018-01-10",
    "rate": "115.49"
  },
  {
    "date": "2018-01-11",
    "rate": "200.00"
  },
  {
    "date": "2018-01-15",
    "rate": "115.49"
  },
  {
    "date": "2018-01-16",
    "rate": "115.49"
  },
  {
    "date": "2018-01-17",
    "rate": "115.49"
  },
  {
    "date": "2018-01-20",
    "rate": "115.49"
  },
  {
    "date": "2018-01-21",
    "rate": "115.49"
  },
  {
    "date": "2018-01-22",
    "rate": "200.00"
  }
]



convertInput(jsonFile);