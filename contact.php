<?php

	$errorMSG = "";

	//Validation for the different form fields
	//FirstName
	if (empty($_POST["formName"])) {
		$errorMSG = "First name is required";
	}else{
		$formName = $_POST["formName"];
	}

	//LastName
	if (empty($_POST["formLname"])) {
		$errorMSG = "Last name is required";
	}else{
		$formLname = $_POST["formLname"];
	}

	//Email
	if (empty($_POST["formEmail"])) {
		$errorMSG = "Valid email address is required";
	}else{
		$formEmail = $_POST["formEmail"];
	}

	//Message Subject
	if (empty($_POST["messageSubject"])) {
		$errorMSG = "Please choose an email subject";
	}else{
		$messageSubject = $_POST["messageSubject"];
	}

	//Message field
	if (empty($_POST["formMessage"])) {
		$errorMSG = "Please leave a message";
	}else{
		$formMessage = $_POST["formMessage"];
	}


	// $formName = $_POST["formName"];
	if (isset($_POST["formName"])) {
    $name = $_POST["formName"];
}
	$formLname = $_POST["formLname"];
	$inputPhone = $_POST["inputPhone"];
	$formEmail = $_POST["formEmail"];
	$messageSubject = $_POST["messageSubject"];
	$formMessage = $_POST["formMessage"];

	$EmailTo = "nmaokafor@yahoo.com";
	$Subject = "New Message from Website Received";

	//email body here
	$Body .= "formName";
	$Body .= $formName;
	$Body .= "\n";

	$Body .= "formLname";
	$Body .= $formLname;
	$Body .= "\n";

	$Body .= "inputPhone";
	$Body .= $inputPhone;
	$Body .= "\n";

	$Body .= "formEmail";
	$Body .= $formEmail;
	$Body .= "\n";

	$Body .= "messageSubject";
	$Body .= $messageSubject;
	$Body .= "\n";

	$Body .= "formMessage";
	$Body .= $formMessage;
	$Body .= "\n";

	//Send email to your domain contact email
	$success = mail($EmailTo, $Subject, $Body, "From".$formEmail);

	//redirect to success page, in this case - same page
	if($success){
		echo "success";
	}else{
		if ($errorMSG == "") {
			echo "Something went wrong";
		}else{
			echo $errorMSG;
		}
	}
?>