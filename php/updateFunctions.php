<?php


//Updates account information - takes in all params on an update, but
//Change password will have to be a seperate function
function updateAccount($conn,$accid,$newfname,$newlname,$newhome)
{
	/*Cases:
		fname
		lname
		home
		fname, lname
		fname, home
		lname, home
		fname, lname, home
	*/ // All these cases will deal with blank parameters not overwriting values
	
	if($newlname==='' && $newhome==='' && $newfname==='')
	{ return; } //if all gets are empty, just don't do anything
	
	if($newlname==='' && $newhome==='')
	{
		$result = $conn->query("
						UPDATE Accounts
						SET Accounts.fname=$newfname
						WHERE Accounts.accid=$accid");
		if(!$result)
		{ return json_encode(false); }
	}
	elseif($newfname==='' && $newhome==='')
	{
		$result = $conn->query("
						UPDATE Accounts
						SET Accounts.lname=$newlname
						WHERE Accounts.accid=$accid");
		if(!$result)
		{ return json_encode(false); }
	}
	elseif($newfname==='' && $newlname==='')
	{
		$result = $conn->query("
						UPDATE Accounts
						SET Accounts.home=$newhome
						WHERE Accounts.accid=$accid");
		if(!$result)
		{ return json_encode(false); }
	}
	elseif($newhome==='')
	{
		$result = $conn->query("
						UPDATE Accounts
						SET Accounts.lname=$newlname, Accounts.fname=$newfname
						WHERE Accounts.accid=$accid");
		if(!$result)
		{ return json_encode(false); }
	}
	elseif($newlname==='')
	{
		$result = $conn->query("
						UPDATE Accounts
						SET Accounts.fname=$newfname, Accounts.home=$newhome
						WHERE Accounts.accid=$accid");
		if(!$result)
		{ return json_encode(false); }
	}
	elseif($newfname==='')
	{
		$result = $conn->query("
						UPDATE Accounts
						SET Accounts.lname=$newlname, Accounts.home=$newhome
						WHERE Accounts.accid=$accid");
		if(!$result)
		{ return json_encode(false); }
	}
	else
	{
		$result = $conn->query("
						UPDATE Accounts
						SET Accounts.lname=$newlname, Accounts.home=$newhome, Accounts.fname=$newfname
						WHERE Accounts.accid=$accid");
		if(!$result)
		{ return json_encode(false); }
	}
	return json_encode(true);
	


	
}

?>