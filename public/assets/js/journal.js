/* eslint-disable prefer-arrow-callback */
//button handler for journal card button
$(document).ready(function() {
   $(".journal-del-button").on("click", function() {
      const apiDeleteURL = `/api/journal/${$(this).data("id")}`;
      $.ajax({
         method: "DELETE",
         url: apiDeleteURL,
      }).then(function() {
         window.location.href = "/JE";
      });
   });
});
