$(document).ready(function(){
	var radioGender = "male"

	var url = "https://randomuser.me/api/?results=10&gender="+ radioGender;
	var p = "";
	var loadMore;
	
	fetchInfo(url);

	// add radio button listener
	$("input[type=radio]").click(function(){
		//grab value of the radio button
		$("#results").empty();

		radioGender = $("input[name='gender']:checked").val();

		url = "https://randomuser.me/api/?results=10&gender="+ radioGender;

		if(radioGender){
			fetchInfo(url);
		}

	});


	function fetchInfo(url){
		fetch(url)
		.then((response) =>(response.json()))
		.then(function(data){
			
			data.results.forEach(person =>{

					p = ` <div class="well">

					<img src="${person.picture.medium}" class="rounded-circle" alt="Cinque Terre">
				
					<span>${person.name.title}</span>
					<span>${person.name.first}</span>
					<span>${person.name.last}</span>
					<span style="margin-left:420px;">Email: ${person.email}</span>

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