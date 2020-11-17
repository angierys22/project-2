/* eslint-disable prefer-arrow-callback */
$(document).ready(function() {
   $.get("/api/user", function(data) {
      if (data.length !== 0) {
         console.log(data);
         for (let i = 0; i < data.length; i++) {
            const userOptionEl = $("<option>");
            userOptionEl.val(data[i].id);
            userOptionEl.text(`${data[i].firstName} ${data[i].lastName}`);
            console.log(userOptionEl);
            $("#inputUser").append(userOptionEl);
         }
      }
   });

   $(".exercise-btn").on("click", function() {
      $("#journal-body").append(`${$(this).attr("data-exercise")} - \n`);
   });

   $("#journal-submit").on("click", function() {
      const journalEntry = {
         UserId: $("#inputUser").val(),
         title: $("#journal-title").attr("placeholder"),
         body: $("#journal-body")
            .val()
            .trim(),
      };

      $.post("/api/journal", journalEntry).then(function() {
         window.location.href = "/JE";
      });
   });
});
