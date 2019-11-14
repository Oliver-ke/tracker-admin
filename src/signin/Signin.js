import React, { useState } from 'react';
import axios from 'axios';
import setAuthToken from '../util/setAuthToken';
import { Link } from 'react-router-dom';
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	Col,
	Container,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Row,
	Alert,
} from 'reactstrap';

const Login = () => {
	const [ inputs, setInputs ] = useState({
		password: '',
		email: '',
	});
	const [ showAlert, setShowAlert ] = useState(false);
	const [ alert, setAlert ] = useState('');
	const inputHandler = (e) => {
		const { name, value } = e.target;
		return setInputs({ ...inputs, [name]: value });
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/v1/user/signin', inputs);
			if (res.status === 200) {
				const token = res.data.data.token;
				setAuthToken(token);
				localStorage.setItem('jwtToken', token);
				window.location.hash = '/';
			}
		} catch (error) {
			setShowAlert(true);
			setAlert('Authentication failed');
			//alert('Error signing in')
		}
	};

	return (
		<div className="app flex-row align-items-center">
			<Container>
				<Row className="justify-content-center">
					<Col md="8">
						<Alert color="danger" isOpen={showAlert} toggle={() => setShowAlert(!alert)}>
							{alert}
						</Alert>
					</Col>
					<Col md="8">
						<CardGroup>
							<Card className="p-4">
								<CardBody>
									<Form method="POST" onSubmit={submitHandler}>
										<h1>Login</h1>
										<p className="text-muted">Sign In to your account</p>
										<InputGroup className="mb-3">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="icon-user" />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type="text"
												placeholder="Email"
												autoComplete="email"
												name="email"
												value={inputs.email}
												onChange={inputHandler}
											/>
										</InputGroup>
										<InputGroup className="mb-4">
											<InputGroupAddon addonType="prepend">
												<InputGroupText>
													<i className="icon-lock" />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type="password"
												placeholder="Password"
												name="password"
												autoComplete="current-password"
												value={inputs.password}
												onChange={inputHandler}
											/>
										</InputGroup>
										<Row>
											<Col xs="6">
												<Button type="submit" color="primary" className="px-4">
													Login
												</Button>
											</Col>
											<Col xs="6" className="text-right">
												<Button color="link" className="px-0">
													Forgot password?
												</Button>
											</Col>
										</Row>
									</Form>
								</CardBody>
							</Card>
							<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
								<CardBody className="text-center">
									<div>
										<h4>One properly completed project is more than a thousand completed once</h4>
									</div>
								</CardBody>
							</Card>
						</CardGroup>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
