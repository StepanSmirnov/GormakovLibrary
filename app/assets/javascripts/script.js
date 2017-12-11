function loginform() {
	var nameAdmin;
	var passAdmin;
	nameAdmin = 'Администратор';
	passAdmin = '1234';

	var nameUser;
	var passUser;
	nameUser = 'Пользователь';
	passUser = '4321'

	var nameTemp;
	var passTemp;
	nameTemp = document.getElementById('login-input').value;
	passTemp = document.getElementById('password-input').value;

	if ((nameTemp == nameAdmin) && (passTemp == passAdmin)) {
		console.log('Введён логин и пароль для входа от имена Администратора');
		document.getElementById('user').style.display='none';
		document.getElementById('admin').style.display='inline-block';
		goodLogin();
	} else if ((nameTemp == nameUser) && (passTemp == passUser)) {
		console.log('Введён логин и пароль для входа от имена Пользователя');
		document.getElementById('admin').style.display='none';
		document.getElementById('user').style.display='inline-block';
		goodLogin();
	} 
	else {
		console.log('Логин и пароль не верны');
		document.getElementById('login-error').style.display='block';
	}
		document.getElementById('login-form').style.display='block';
}

function goodLogin() {
		console.log('Авторизация успешна, открываю главную форму')
		clearInput();
		document.getElementById('window-main').style.display='block';
		document.getElementById('window-login').style.display='none';
		document.getElementById('login-error').style.display='none';
		document.getElementById('login-input');
}


function windowError() {
	document.getElementById('window-error').style.display='block';
}


function windowMainMinimize() {
	document.getElementById('window-main').style.display='none';
	document.getElementById('turn').style.display='block';
}
function windowMainMaximizeGo() {
	document.getElementById('window-main').style.width='99.3%';
	document.getElementById('window-main').style.height='99.2%';
	document.getElementById('window-main__content').style.height='86%';
	document.getElementById('max2').style.display='none';
	document.getElementById('max1').style.display='block';
}
function windowMainMaximizeOut() {
	document.getElementById('window-main').style.width='800px';
	document.getElementById('window-main').style.height='520px';
	document.getElementById('window-main__content').style.height='430px';
	document.getElementById('max1').style.display='none';
	document.getElementById('max2').style.display='block';
}

function windowMainClose() {
	document.getElementById('window-main').style.display='none';
}

function windowMainOpen() {
	document.getElementById('window-main').style.display='block';
}

function windowAboutOpen() {
	document.getElementById('window-about').style.display='block';
}
function windowAddOpen() {
	document.getElementById('window-add').style.display='block';
}
function windowSearchOpen() {
	document.getElementById('window-search').style.display='block';
}
function windowDownloadOpen() {
	document.getElementById('window-download').style.display='block';
}
function windowLoginOpen() {
	document.getElementById('window-login').style.display='block';
}
function windowLoginClose() {
	document.getElementById('window-login').style.display='none';
}

function turnClose() {
	document.getElementById('turn').style.display='none';
	document.getElementById('window-main').style.display='block';
}

function windowErrorClose() {
	document.getElementById('window-error').style.display='none';
}

function windowSearchClose() {
	document.getElementById('window-search').style.display='none';
}

function windowDownloadClose() {
	document.getElementById('window-download').style.display='none';
}

function windowAboutClose() {
	document.getElementById('window-about').style.display='none';
}

function windowAddClose() {
	document.getElementById('window-add').style.display='none';
}


function clearInput() {
	console.log('Очищаю поля ввода');
	document.getElementById('login-input').value='';
	document.getElementById('password-input').value='';	
}

function clearInputLogin() {
	document.getElementById('login-input').value='';
}

function clearInputPassword() {
	document.getElementById('password-input').value='';
}

function closeError() {
	document.getElementById('login-error').style.display='none';
}