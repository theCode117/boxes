/* $('#createButton').on('click', function() {
    $('#container').append(`
      <div class="textContainer">
        <div class="toggleText">Toggle Text</div>
        <p class="noDisplay">Suprise! Here is some text.</p>
      </div>
    `);
  }); */


    $(boxContainer).append(`
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    `)


$('#boxContainer').on('click', '.box', function() {
    let box = $(this);
    $(box).toggleClass('gray'); 
  });