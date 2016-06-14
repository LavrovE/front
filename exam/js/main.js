$(function() {




$('header a.login').on('click', function(){
	$('header a.login').removeClass('active');
	$(this).addClass('active');
})
$('header a:nth-child(5)').on('click',function(){
	 var topp = $('body').scrollTop()+$('.search input[type="button"]').offset().top;
  	 $('html, body').animate({scrollTop:topp},'slow');
  	console.log(topp)
})



var quantity = 7;

$.ajax({
	url:"http://pixabay.com/api/?key=2648544-92731b16b63d753b940a24b1a&q=&per_page="+quantity,
	dataType:"jsonp",
	method:"POST",
	 success: function(data) {
	 	
         console.log(data.hits[0].webformatURL);
         console.log(data.hits[1].webformatURL);
         console.log(data.hits[2].webformatURL);
         console.log(data.hits[3].webformatURL);
         console.log(data.hits[4].webformatURL);
         console.log(data.hits[5].webformatURL);
         console.log(data.hits[0].tags);

        
			



          var html = $('#search__pictures').html();
	         var pictures = [
	         {
	         	pic:data.hits[0].webformatURL,
	         	tag:data.hits[0].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[1].webformatURL,
	         	tag:data.hits[1].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[2].webformatURL,
	         	tag:data.hits[2].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[3].webformatURL,
	         	tag:data.hits[3].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[4].webformatURL,
	         	tag:data.hits[4].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[5].webformatURL,
	         	tag:data.hits[5].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[6].webformatURL,
	         	tag:data.hits[6].tags.split(',')[0]
	         },
	        
	         ]
         var content = tmpl(html,{
         	data:pictures
         });

         	$('.grid').append(content);


      }
	
	})


function someFunc(){
$('.grid div').remove();
var word = document.getElementById("txt").value;
var quantity = 7;
$.ajax({
	url:"http://pixabay.com/api/?key=2648544-92731b16b63d753b940a24b1a&q="+word+"&per_page="+quantity,
	dataType:"jsonp",
	method:"POST",
	 success: function(data) {
	 	console.log(data);
         console.log(data.hits[0].webformatURL);
         console.log(data.hits[1].webformatURL);
         console.log(data.hits[2].webformatURL);
         console.log(data.hits[3].webformatURL);
         console.log(data.hits[4].webformatURL);

         var html = $('#search__pictures').html();
	         var pictures = [
	         {
	         	pic:data.hits[0].webformatURL,
	         	tag:data.hits[0].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[1].webformatURL,
	         	tag:data.hits[1].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[2].webformatURL,
	         	tag:data.hits[2].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[3].webformatURL,
	         	tag:data.hits[3].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[4].webformatURL,
	         	tag:data.hits[4].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[5].webformatURL,
	         	tag:data.hits[5].tags.split(',')[0]
	         },
	          {
	         	pic:data.hits[6].webformatURL,
	         	tag:data.hits[6].tags.split(',')[0]
	         },
	        
	         ]
         var content = tmpl(html,{
         	data:pictures
         });

         	
         	$(".grid").append(content);

      },
	
	})
	
}
document.getElementById("btn").onclick = someFunc;



$('.grid').isotope({
 layoutMode: 'fitRows',
itemSelector: '.grid-item',
percentPosition: true,
fitRows: {
  gutter: '.gutter-sizer'
}
});


});

