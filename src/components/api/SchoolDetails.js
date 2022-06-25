var SchoolDetails = (function() {
    var school_id = "";
  
    var getSchoolId = function() {
      return school_id;    // Or pull this from cookie/localStorage
    };
  
    var setSchoolId = function(id) {
        school_id = id;     
      // Also set this in cookie/localStorage
    };
  
    return {
        getSchoolId: getSchoolId,
        setSchoolId: setSchoolId
    }
  
  })();
  
  export default SchoolDetails;