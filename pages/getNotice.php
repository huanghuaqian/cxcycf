<?php
	header("Content-type:application/json; charset=utf-8");
	$arr = array(
				'newstype' => '百家',
				'newsimg' => 'image/chuangye.jpg',
				'newstitile' => '标题'
				);
	echo json_encode($arr);
?>