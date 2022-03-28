import React, { usrRef, useState, useEffect, useRef } from 'react';
import './Login.css';

class Login extends React.Component
{

	render() 
	{
		return (
			<div className='container' id='loginContainer'>

				<div className='row h-100' >
					<div className='row justify-content-center align-items-end h-25'>
						<h2 className='text-center' id='loginTitle'>A<sup>+</sup>企業創新研發淬鍊計畫 計畫管理系統</h2>
					</div>

					<div className='row justify-content-center align-items-center h-75' >
						<form className='pt-4 pb-4' id='loginForm'>
							<div class='mb-5'>
								<h2 className='text-center'>成員登入</h2>
							</div>
							<div class='mb-4'>
								<input type='text' className='form-control' id='inputUserID' placeholder='帳號' required />
							</div>
							<div class='mb-4'>
								<input type='password' className='form-control' id='inputPassword' placeholder='密碼' required />
							</div>
							<div class='d-grid gap-2'>
								<button className='btn btn-primary' type="submit">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}













export default Login;