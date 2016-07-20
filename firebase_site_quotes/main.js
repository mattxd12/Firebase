
var niceArray = [
   '"I think, therefore, I am" —Descartes',
   '"The first step to getting the things you want out of life is this: Decide what you want" —Ben Stein',
   '"Thinking will not overcome fear but action will" —W. Clement Stone',
   '"Whatever happens, take responsibility" —Tony Robbins',
   '"Carpe diem" —Horace, 23 BC',
   '"A goal is a dream with a deadline." —Napoleon Hill',
   '"Once you say you are going to settle for second, that\'s what happens to you in life." —John F Kennedy',
   '"Leave the past, engage the present, create the future." —Julio Melara',
   '"If you change nothing, nothing changes." —Dr. Joyce'

   ];

function generate() {
  return Math.floor(Math.random()* niceArray.length)
}
console.log(generate());

$("button").on("click",
  function() {
    $("#result h1").html(niceArray[generate()]);
  });
