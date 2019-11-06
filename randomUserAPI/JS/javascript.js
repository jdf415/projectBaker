$(document).ready(function(){

	var radioGender = "male"

	var url = "https://randomuser.me/api/?results=10&gender="+ radioGender;
	var p = "";
	var loadMore;
	
	fetchInfo(url);

	// add radio button listener
	$("input[type=radio]").click(function(){
		// erases previous ten
		$("#results").empty();
		//grab value of the radio button
		radioGender = $("input[name='gender']:checked").val();
		// grabs url with radioGender to get results
		url = "https://randomuser.me/api/?results=10&gender="+ radioGender;

		if(radioGender){
			fetchInfo(url);
		}

	});

	// function to generate ten random ppl
	function fetchInfo(url){
		// using fetch
		fetch(url)
		.then((response) =>(response.json()))
		.then(function(data){
			
			data.results.forEach(person =>{

					p = ` 
					<div class="bg-light">
						<img src="${person.picture.medium}" class="rounded-circle" alt="Cinque Terre">
						<span><h2>First Name: ${person.name.first}</h2></span>
						<span><h2>Laste Name: ${person.name.last}</h2></span>
						<span><h2>Age: ${person.dob.age}</h2></span>
						<span><h6>Location: ${person.location.country}</h6></span>
						<span style="margin-left:420px;"><h5>Email: ${person.email}</h5></span>
					</div>
					`;

					$("#results").append(p); 
			});
			loadMore = `<button id="load-more" class="btn btn-primary">Click Here</button>`;

				$("#results").append(loadMore);

				$("#load-more").on('click',function(){

					fetchInfo(url);

					$(this).remove();

				})
		});
	}
});
