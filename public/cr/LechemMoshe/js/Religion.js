const religions = 
{
    JEWISH: 10,
    MUSLIM: 01,
    CRISTIANITY: 00
}

religion = religions.JEWISH;

function religionFunction()
{
	switch(religion)
	{
		case religions.CRISTIANITY:
            document.location.href = document.location.href.replace("/it/","/is/") 
			break;
		case religions.MUSLIM:
            document.location.href = document.location.href.replace("/is/","/me/") 
			break;
		case religions.JEWISH:
            document.location.href = document.location.href.replace("/me/","/it/") 
            break;
	}
}

function eternityFunction()
{
	//switch(religion)
	//{
		//case religions.JEWISH:
            document.location.href = document.location.href.replace("/me/","/naftali/") 
     //       break;
	//}
}