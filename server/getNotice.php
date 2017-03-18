<?php
	header("Content-type:application/json; charset=UTF-8");
	// $arr = array(
	// 			'noticeTitle' => '全省扶贫开发项目档案业务培训会在蓉举办',
	// 			'noticeContent' => 'something'
	// 			);
	$link = mysql_connect("localhost", "root", "");
	if (!$link)
  	{
  		echo json_encode(array('Connect Info' => 'Connect fail'));
  	}else{
  		mysql_select_db("cxcycf", $link);
  		$result = mysql_query('SELECT `noticeTitle` FROM `notices` WHERE 1');
  		
  		while ($row = mysql_fetch_array($result)) {
  			echo $row['noticeTitle'];
  		}
  		//echo json_encode(array('Connect Info' => 'Connect success'));
  	}
  	//mysql_close(); 
	// echo json_encode($arr);
?>