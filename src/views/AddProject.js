import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row, Alert, Form } from 'reactstrap';

const AddProject = () => {
	const [ showAlert, setShowAlert ] = useState(false);
	const [ alert, setAlert ] = useState('');
	const [ inputs, setInputs ] = useState({
		LGA: '',
		community: '',
		category: '',
		location: '',
		state: '',
		projectType: '',
		projectDescription: '',
		budgetedCost: '',
		commitment: '',
		status: '',
	});
	const inputHandler = (e) => {
		const { value, name } = e.target;
		return setInputs({ ...inputs, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			//const token = localStorage.getItem('jwtToken');
			const res = await axios.post('/api/v1/project', inputs);
			if (res.status === 201) {
				setShowAlert(true);
				return setAlert('Project Successfully Added');
			}
			return setAlert('Error!! Adding Project');
		} catch (error) {
			setAlert('Error!! Adding Project');
			console.log({ ...error });
		}
	};
	return (
		<div className="animated fadeIn">
			<Row>
				<Col xs="12" sm="12">
					<Col md="12">
						<Alert color="info" isOpen={showAlert} toggle={() => setShowAlert(!alert)}>
							{alert}
						</Alert>
					</Col>
					<Card>
						<CardHeader>
							<strong>Add New Project</strong>
						</CardHeader>
						<CardBody>
							<Form method="POST" onSubmit={handleSubmit}>
								<Row>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="state">State</Label>
											<Input
												name="state"
												value={inputs.state}
												onChange={inputHandler}
												type="text"
												id="state"
												placeholder="project state"
												required
											/>
										</FormGroup>
									</Col>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="LGA">Local Government</Label>
											<Input
												type="text"
												name="LGA"
												onChange={inputHandler}
												value={inputs.LGA}
												id="LGA"
												placeholder="LGA"
												required
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="community">Community</Label>
											<Input
												name="community"
												value={inputs.community}
												onChange={inputHandler}
												type="text"
												id="community"
												placeholder="Community"
												required
											/>
										</FormGroup>
									</Col>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="category">Project Category</Label>
											<Input
												name="category"
												value={inputs.category}
												onChange={inputHandler}
												type="text"
												id="category"
												placeholder="category e.g Helth, Road, ICT"
												required
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="location">Location</Label>
											<Input
												name="location"
												value={inputs.location}
												onChange={inputHandler}
												type="text"
												id="location"
												placeholder="eg. Ikwere "
												required
											/>
										</FormGroup>
									</Col>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="projectType">Project Type</Label>
											<Input
												name="projectType"
												value={inputs.projectType}
												onChange={inputHandler}
												type="text"
												id="projectType"
												placeholder="project Type"
												required
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="projectDescription">Project Description</Label>
											<Input
												name="projectDescription"
												value={inputs.projectDescription}
												onChange={inputHandler}
												type="text"
												id="projectDescription"
												placeholder="write description"
												required
											/>
										</FormGroup>
									</Col>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="budgetedCost">Budgeted Cost</Label>
											<Input
												value={inputs.budgetedCost}
												onChange={inputHandler}
												name="budgetedCost"
												type="number"
												id="budgetedCost"
												placeholder="Bugeted cost"
												required
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="commitment">Commitment</Label>
											<Input
												name="commitment"
												value={inputs.commitment}
												onChange={inputHandler}
												type="number"
												id="commitment"
												placeholder="commitment"
												required
											/>
										</FormGroup>
									</Col>
									<Col xs="12" md="6">
										<FormGroup>
											<Label htmlFor="status">Status</Label>
											<Input
												name="status"
												value={inputs.status}
												onChange={inputHandler}
												type="text"
												id="status"
												placeholder="Write status"
												required
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xs="12" md="6">
										<Button type="submit" active color="primary" className="mt-3">
											Add Project
										</Button>
									</Col>
								</Row>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default AddProject;
