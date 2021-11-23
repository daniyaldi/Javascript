const INSTRUMENT_TYPE_STRING = 0;
const INSTRUMENT_TYPE_PERCUSSION = 1;
const INSTRUMENT_TYPE_WIND = 2;

const instruments = [
  { 
    id: 0,
    name: 'guitar',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 1,
    name: 'xylophone',
    type: INSTRUMENT_TYPE_PERCUSSION
  },
  {
    id: 2,
    name: 'zither',
    type: INSTRUMENT_TYPE_STRING
  },
  { 
    id: 3,
    name: 'bagpipes',
    type: INSTRUMENT_TYPE_WIND
  },
];

const sortItems = (objArr) => {
    return (
      [...objArr].sort((a, b) => {
        const nameA = a.name.toUpperCase(); 
         console.log(nameA);
        const nameB = b.name.toUpperCase(); 
        console.log(nameB);
        
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;

      })
    
    );
} 

//challenge 1
sortItems(instruments);
console.log(instruments);  

//challenge 2
const getType = (objArr, type) => objArr.filter(objItem => objItem.type === type);
console.log(getType(instruments, INSTRUMENT_TYPE_STRING));  

//challenge 3
const getNames = objArr => objArr.map(objItem => objItem.name);
console.log(getNames(instruments));

//challenge 4
console.log(getNames(getType(instruments, INSTRUMENT_TYPE_STRING)));