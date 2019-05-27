// function openTab(evt, tabName) {

// 	 // Here I declare all variables
// 	var i, tabcontent, tablinks;

// 	// Then I get all elements with class="tabcontent" and hide them
// 	tabcontent = document.getElementsByClassName("tabcontent");
// 		for (i = 0; i < tabcontent.length; i++) {
// 			tabcontent[i].style.display = "none";
// 		}

// 	// Then I get all elements with class="tablinks" and replace the class "active" with nothing, i.e removing the active class.
// 	tablinks = document.getElementsByClassName("tablink");
// 		for (i = 0; i < tabcontent.length; i++) {
// 			tablinks[i].className = tablinks[i].className.replace("active", "");
// 		}

// 	//Here I find the element with a id of the tabName and set display equal to block
// 	 //and I give the classname “active” to the currentTarget
// 	document.getElementById("tabName").style.display = "block";
// 	evt.currentTarget.className += "active";
// }

function(){

	$("#contactForm").validator().on("submit", function (event){
		if(event.isDefaultPrevented()) {
			formError();
			submitMSG(false, "Did you fill in the form properly?");
		}else{
			event.preventDefault();
			submitForm();
		}
	});


	function submitForm(){
		// Initiate Variables With Form Content
		var formName = $("formName").val();
		var formLname = $("formLname").val();
		var inputPhone = $("inputPhone").val();
		var formEmail = $("formEmail").val();
		var messageSubject = $("messageSubject").val();
		var formMessage = $("formMessage").val();
		$.ajax({
			type: "POST",
			url: "./contact.php"
			data: "formName=" + formName + "&formLname=" + formName + "&inputPhone=" + inputPhone + "&formEmail=" + formEmail + "&messageSubject=" + messageSubject + "&formMessage=" + formMessage,
			success: function(text){
				if (text === "success") {
					formSuccess();
				}else{
					formError();
					submitMSG(false,text);
				}
			}

		});
	}

	function formSuccess(){
		$("#contactForm")[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function formError(){
		  $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
       			$(this).removeClass();
			});
	}

	function submitMSG(valid, msg){
			var msgClasses;
	    if(valid){
	        var msgClasses = "h3 text-center tada animated text-success";
	    } else {
	        var msgClasses = "h3 text-center text-danger";
	    }
	    $("#submitMessage").removeClass().addClass(msgClasses).text(msg);
	}
}