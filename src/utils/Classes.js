var Classes = (function() {
  
    const classes = [
        { label: "Play Group", value: "Play_Group" },
        { label: "Nursery", value: "Nursery" },
        { label: "LKG", value: "LKG" },
        { label: "UKG", value: "UKG" },
        { label: "I", value: "I" },
        { label: "II", value: "II" },
        { label: "III", value: "III" },
        { label: "IV", value: "IV" },
        { label: "V", value: "V" },
        { label: "VI", value: "VI" },
        { label: "VII", value: "VII" },
        { label: "VIII", value: "VIII" },
        { label: "IX", value: "IX" },
        { label: "X", value: "X" },
        { label: "XI", value: "XI" },
        { label: "XII", value: "XII" }
    ];

    var getClasses = function() {
        return classes; 
    };
  
    return {
        getClasses: getClasses
    }
  
  });
  
  export default Classes;