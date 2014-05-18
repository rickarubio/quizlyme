$(document).ready(function() {
  examination.isExamination();
});

var examination = (function() {
  return {
    isExamination: function() {
      if (document.location.pathname.match("/examination/")) {
        console.log('exam in progress');
      }
    }
  }
})();