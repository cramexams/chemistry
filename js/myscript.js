 		function CommentSection()
	{
				
				var x = document.getElementById("hackhimon");
				var hackhimon = document.querySelector("#hackhimon");

				x.className = "show";
				document.getElementById("hackhimon").style.visibility = "visible";
				

				document.addEventListener("click", function(event) {
				if (event.target.closest(".hackers"))
				{
					document.getElementById("hackhimon").style.visibility = "hidden";
				}
				else
				{
					document.getElementById("hackhimon").style.visibility = "visible";
				}
					});

	}
