import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Badge,
	Card,
	CardBody,
	CardHeader,
	Col,
	Pagination,
	PaginationItem,
	PaginationLink,
	Row,
	Table,
} from 'reactstrap';

const ViewProject = () => {
	const [ projects, setProject ] = useState([]);
	useEffect(() => {
		const getProject = async () => {
			try {
				const res = await axios.get('/api/v1/project');
				setProject(res.data.data);
			} catch (error) {
				setProject('serror');
			}
		};
		getProject();
	}, []);
	console.log(projects);
	return (
		<div className="animated fadeIn">
			<Row>
				<Col xs="12" lg="12">
					<Card>
						<CardHeader>
							<i className="fa fa-align-justify" /> Created Projects
						</CardHeader>
						<CardBody>
							<Table responsive striped>
								<thead>
									<tr>
										<th>Date Added</th>
										<th>State</th>
										<th>LGA</th>
										<th>Category</th>
										<th>Location</th>
										<th>Community</th>
										<th>Budget</th>
										<th>Commitment</th>
									</tr>
								</thead>
								<tbody>
									{projects.map((project) => {
										return (
											<tr key={project.id}>
												<td>{new Date(project.createdAt).toDateString()}</td>
												<td>{project.state}</td>
												<td>{project.LGA}</td>
												<td>{project.category}</td>
												<td>{project.location}</td>
												<td>{project.community}</td>
												<td>{project.budgetedCost}</td>
												<td>{project.commitment}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
							<Pagination>
								<PaginationItem disabled>
									<PaginationLink previous tag="button">
										Prev
									</PaginationLink>
								</PaginationItem>
								<PaginationItem active>
									<PaginationLink tag="button">1</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink tag="button">2</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink tag="button">3</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink tag="button">4</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink next tag="button">
										Next
									</PaginationLink>
								</PaginationItem>
							</Pagination>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default ViewProject;
