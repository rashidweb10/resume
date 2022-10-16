<?php 

    $message = '';
    
    foreach($_POST as $field => $value)
    {
        $message .=  strip_tags($field).' : '. strip_tags($value).'\n';
    }

    $response = mail("rashidk.developer@gmail.com","Enquiry From Resume",$message);

    echo $response ? true : false;

?>