<?php
$filename = "gb_content.txt";
fopen($filename, "c+");

if (!empty($_POST)) {
    $data = array(
		'name'=>$_POST['name'],
		'email'=>$_POST['email'],
		'birthday'=>$_POST['birthday'],
		'message'=>preg_replace("/\r\n|\r|\n/",'<br/>',$_POST['message']),
		'timestamp'=>time(),
		);

    file_put_contents($filename, json_encode($data)."\r\n",FILE_APPEND);
}

$zeilen = file("gb_content.txt",FILE_SKIP_EMPTY_LINES);

echo "[";
for($i=0;$i<count($zeilen);$i++) {
	if($i!=0){echo ",";}
    echo $zeilen[$i];
}
echo "]";

?>